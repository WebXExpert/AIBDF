import React, { useState, useEffect } from "react";
import { Heart, ShieldCheck, Lock, CheckCircle2, CreditCard, ArrowRight, Activity, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { organizationSchema, webPageSchema } from "../components/seo/schemas";

const donationSchema = z.object({
  amount: z.number().min(100, "Minimum donation is ₹100"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Valid PAN is required for 80G").optional().or(z.literal('')),
});

type DonationData = z.infer<typeof donationSchema>;

const PRESET_AMOUNTS = [1000, 5000, 10000, 25000];

export default function Donate() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [donorData, setDonorData] = useState<DonationData | null>(null);

  useEffect(() => {
    if (searchParams.get("success")) {
      setIsSuccess(true);
    }
  }, [searchParams]);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<DonationData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: 5000
    }
  });

  const selectedAmount = watch("amount");

  const handleAmountSelect = (amount: number) => {
    setValue("amount", amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    if (val) {
      setValue("amount", parseInt(val, 10));
    }
  };

  const onProceedToDetails = () => {
    if (selectedAmount >= 100) {
      setStep(2);
    }
  };

  const onSubmitDetails = (data: DonationData) => {
    setDonorData(data);
    setStep(3);
  };

  const processPayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: selectedAmount,
          donorDetails: donorData,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.error("Error processing payment:", error);
      setIsProcessing(false);
      alert("There was an error processing your payment. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-50 min-h-screen pt-32 pb-24 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto bg-white rounded-card p-10 md:p-16 shadow-card border border-gray-200 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-10 font-light">
            Your generous donation has been received successfully.
          </p>
          <div className="bg-gray-50 rounded-card p-8 mb-10 text-left border border-gray-200 shadow-soft">
            <h3 className="font-medium text-gray-900 mb-4 text-lg">Transaction Details</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-base">
              <div className="text-gray-500">Transaction ID:</div>
              <div className="font-medium text-gray-900">TXN{Math.random().toString().slice(2, 12)}</div>
              <div className="text-gray-500">Date:</div>
              <div className="font-medium text-gray-900">{new Date().toLocaleDateString()}</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-medium rounded-btn hover:bg-brand-primary-hover transition-colors shadow-btn">
              <FileText className="w-5 h-5 mr-2" /> Download 80G Receipt
            </button>
            <button 
              onClick={() => {
                window.location.href = "/donate";
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-btn hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              Make Another Donation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <Seo
        title="Donate to AIBDF"
        description="Your donation funds real diagnosis, real treatment, and real lives for patients with rare auto-immune blistering diseases. 80G tax benefit. Secure payments via Stripe."
        keywords={["donate AIBDF", "80G donation India", "pemphigus patient fund", "rare disease donation"]}
        jsonLd={[
          organizationSchema,
          {
            "@context": "https://schema.org",
            "@type": "DonateAction",
            name: "Donate to AIBDF",
            recipient: { "@id": "https://aibdf.digitaldadi.agency/#organization" },
            target: "https://aibdf.digitaldadi.agency/donate",
          },
          webPageSchema({
            path: "/donate",
            name: "Donate",
            description: "Support AIBDF's work for patients with rare auto-immune blistering diseases.",
            breadcrumbs: [{ name: "Home", path: "/" }, { name: "Donate", path: "/donate" }],
          }),
        ]}
      />
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/wp-images/faq-topbanner.jpg" 
            alt="Donate" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Support Our Cause
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Your donation directly funds life-saving treatments and medical research for patients with rare autoimmune diseases.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Trust & Impact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-card p-10 shadow-card border border-gray-200">
              <h2 className="text-3xl font-medium text-gray-900 mb-8 tracking-tight">Why Donate to AIBDF?</h2>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-brand-primary-soft text-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">100% Goes to Patients</h3>
                    <p className="text-gray-600 text-base mt-2 leading-relaxed font-light">Every rupee you donate goes directly towards patient treatments and medications. Our administrative costs are covered separately.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-brand-info-soft text-brand-info rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">80G Tax Exemption</h3>
                    <p className="text-gray-600 text-base mt-2 leading-relaxed font-light">AIBDF is a registered NGO. All donations are eligible for tax deduction under section 80G of the Income Tax Act.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-brand-accent-soft text-brand-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xl">Life-Saving Impact</h3>
                    <p className="text-gray-600 text-base mt-2 leading-relaxed font-light">Treatments like Rituximab are incredibly expensive. Your contribution literally saves lives and restores normalcy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-card p-10 text-white shadow-card">
              <div className="flex items-center gap-3 mb-6 text-brand-primary">
                <Lock className="w-6 h-6" />
                <span className="font-medium tracking-widest uppercase text-sm">Secure Payment</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Your payment information is processed securely. We do not store credit card details nor have access to your credit card information. Protected by 256-bit SSL encryption.
              </p>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-card shadow-card border border-gray-200 overflow-hidden">
              
              {/* Progress Bar */}
              <div className="flex border-b border-gray-200">
                <div className={cn("flex-1 text-center py-6 text-sm font-medium transition-colors uppercase tracking-widest", step >= 1 ? "text-brand-primary border-b-2 border-brand-primary bg-brand-primary-soft" : "text-gray-400")}>
                  1. Amount
                </div>
                <div className={cn("flex-1 text-center py-6 text-sm font-medium transition-colors uppercase tracking-widest", step >= 2 ? "text-brand-primary border-b-2 border-brand-primary bg-brand-primary-soft" : "text-gray-400")}>
                  2. Details
                </div>
                <div className={cn("flex-1 text-center py-6 text-sm font-medium transition-colors uppercase tracking-widest", step >= 3 ? "text-brand-primary border-b-2 border-brand-primary bg-brand-primary-soft" : "text-gray-400")}>
                  3. Payment
                </div>
              </div>

              <div className="p-10 md:p-14">
                <AnimatePresence mode="wait">
                  {/* Step 1: Amount */}
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">Choose Amount</h2>
                      <p className="text-xl text-gray-600 mb-10 font-light">Select a donation amount or enter a custom one.</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {PRESET_AMOUNTS.map((amt) => (
                          <button
                            key={amt}
                            onClick={() => handleAmountSelect(amt)}
                            className={cn(
                              "py-5 rounded-btn text-2xl font-medium border-2 transition-all",
                              selectedAmount === amt && !customAmount
                                ? "border-brand-primary bg-brand-primary-soft text-brand-primary"
                                : "border-gray-200 text-gray-700 hover:border-brand-primary hover:bg-gray-50"
                            )}
                          >
                            ₹{amt.toLocaleString('en-IN')}
                          </button>
                        ))}
                      </div>

                      <div className="mb-12">
                        <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-widest">Custom Amount (₹)</label>
                        <input
                          type="text"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Enter amount"
                          className="w-full px-6 py-5 text-2xl font-medium border-2 border-gray-200 rounded-btn focus:border-brand-primary focus:ring-0 outline-none transition-colors"
                        />
                        {selectedAmount < 100 && <p className="text-brand-accent text-sm mt-3 font-medium">Minimum donation is ₹100</p>}
                      </div>

                      <button
                        onClick={onProceedToDetails}
                        disabled={selectedAmount < 100}
                        className="w-full py-6 bg-brand-primary text-white text-xl font-medium rounded-btn hover:bg-brand-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-btn hover:-translate-y-1"
                      >
                        Continue with ₹{selectedAmount.toLocaleString('en-IN')} <ArrowRight className="w-6 h-6" />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Details */}
                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-10">
                        <h2 className="text-4xl font-medium text-gray-900 tracking-tight">Your Details</h2>
                        <button onClick={() => setStep(1)} className="text-sm font-medium text-brand-primary hover:text-brand-primary-hover uppercase tracking-widest">
                          Edit Amount
                        </button>
                      </div>
                      
                      <form onSubmit={handleSubmit(onSubmitDetails)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-widest">Full Name *</label>
                            <input 
                              {...register("name")}
                              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-btn focus:border-brand-primary outline-none transition-colors"
                              placeholder="John Doe"
                            />
                            {errors.name && <p className="text-brand-accent text-sm mt-2 font-medium">{errors.name.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-widest">Email Address *</label>
                            <input 
                              {...register("email")}
                              type="email"
                              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-btn focus:border-brand-primary outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-brand-accent text-sm mt-2 font-medium">{errors.email.message}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-widest">Phone Number *</label>
                            <input 
                              {...register("phone")}
                              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-btn focus:border-brand-primary outline-none transition-colors"
                              placeholder="+91"
                            />
                            {errors.phone && <p className="text-brand-accent text-sm mt-2 font-medium">{errors.phone.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-widest">PAN Card (For 80G)</label>
                            <input 
                              {...register("pan")}
                              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-btn focus:border-brand-primary outline-none transition-colors uppercase"
                              placeholder="ABCDE1234F"
                            />
                            {errors.pan && <p className="text-brand-accent text-sm mt-2 font-medium">{errors.pan.message}</p>}
                          </div>
                        </div>

                        <div className="pt-6">
                          <button
                            type="submit"
                            className="w-full py-6 bg-brand-primary text-white text-xl font-medium rounded-btn hover:bg-brand-primary-hover transition-all flex items-center justify-center gap-3 shadow-btn hover:-translate-y-1"
                          >
                            Proceed to Payment <ArrowRight className="w-6 h-6" />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {/* Step 3: Payment Gateway Simulation */}
                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">Secure Payment</h2>
                      <p className="text-xl text-gray-600 mb-10 font-light">You are about to donate ₹{selectedAmount.toLocaleString('en-IN')}</p>
                      
                      {isProcessing ? (
                        <div className="py-16">
                          <div className="w-20 h-20 border-4 border-brand-primary-soft border-t-brand-primary rounded-full animate-spin mx-auto mb-8"></div>
                          <h3 className="text-2xl font-medium text-gray-900 mb-3">Processing Payment...</h3>
                          <p className="text-gray-500 text-lg">Please do not close this window or press back.</p>
                        </div>
                      ) : (
                        <div className="space-y-8">
                          <div className="bg-gray-50 border border-gray-200 rounded-card p-8 text-left">
                            <div className="flex items-center justify-between mb-6">
                              <span className="text-gray-600 font-medium text-lg">Total Amount</span>
                              <span className="text-4xl font-medium text-gray-900">₹{selectedAmount.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="h-px bg-gray-200 my-6"></div>
                            <div className="flex items-center gap-3 text-base text-gray-600">
                              <Lock className="w-5 h-5 text-green-600" />
                              <span>Secured by Razorpay / Stripe</span>
                            </div>
                          </div>

                          <button
                            onClick={processPayment}
                            className="w-full py-6 bg-gray-900 text-white text-xl font-medium rounded-btn hover:bg-gray-800 transition-all flex items-center justify-center gap-3 shadow-card hover:-translate-y-1"
                          >
                            <CreditCard className="w-6 h-6" /> Pay ₹{selectedAmount.toLocaleString('en-IN')} Now
                          </button>
                          
                          <button 
                            onClick={() => setStep(2)}
                            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
                          >
                            Back to Details
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
