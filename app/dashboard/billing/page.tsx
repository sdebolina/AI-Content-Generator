"use client";
import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import { checkout } from "@/components/checkout";

function Billing() {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="text-center font-bold text-4xl my-3 text-primary">Upgrade To CogniCreate Prime</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center sm:justify-center p-6">
        <div className="rounded-2xl bg-white border border-gray-200 p-5">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Free
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-2xl">Re. 0</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 10,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 10+ Content Templates </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> Unlimited Download & Copy </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 10+ Content Templates </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 1 Month of History </span>
            </li>
          </ul>
          <a
            href="#"
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center
            text-sm font-medium bg-gray-500 text-white hover:ring-1 hover:ring-indigo-600
            focus:outline-none">
            Currently Active Plan
          </a>
        </div>
        <div className="rounded-2xl bg-white border border-gray-200 p-5">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Prime
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-2xl">Rs. 100</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 10,00,000 Words/Month </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 10+ Content Templates </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> Unlimited Download & Copy </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 10+ Content Templates </span>
            </li>
            <li className="flex items-center gap-1">
              <CircleCheckBig className="text-green-500" />
              <span className="text-gray-700"> 1 Year of History </span>
            </li>
          </ul>
          <a
            href="#"
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center
            text-sm font-medium text-white bg-violet-500 hover:ring-1 hover:ring-indigo-600 focus:outline-none"
            onClick={(() => {
              checkout({
                lineItems: [{ price: "price_1Q5DEGRxnAYNH5k92LzTCuFw", quantity: 1 }]
              })
            })}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Billing;