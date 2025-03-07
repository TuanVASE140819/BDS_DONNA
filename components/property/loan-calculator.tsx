"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Import Button
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

interface LoanCalculatorProps {
  price: number;
}

export function LoanCalculator({ price }: LoanCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(price * 0.7);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showDetails, setShowDetails] = useState(false); // New state for toggling details

  // Calculate total interest and other loan details
  const totalPayment = monthlyPayment * term * 12;
  const totalInterest = totalPayment - loanAmount;

  useEffect(() => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;
    const payment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(payment);
  }, [loanAmount, interestRate, term]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Tính toán khoản vay</h2>

      <div className="space-y-6">
        {/* Your existing code for loan amount, interest rate, and term */}
        {/* ... */}

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">Trả hàng tháng</p>
            <p className="text-xl font-bold text-primary">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(monthlyPayment)}
            </p>
          </div>

          {/* Add button to show details */}
          <Button
            variant="outline"
            className="w-full mt-4 flex items-center justify-center"
            onClick={() => setShowDetails(!showDetails)}
          >
            <span className="mr-2">Chi tiết</span>
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>

          {/* Loan details section */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t space-y-3">
              <h3 className="font-medium">Chi tiết khoản vay</h3>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-muted-foreground">Tổng khoản vay:</p>
                <p className="font-medium text-right">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(loanAmount)}
                </p>

                <p className="text-muted-foreground">Lãi suất hàng năm:</p>
                <p className="font-medium text-right">{interestRate}%</p>

                <p className="text-muted-foreground">Thời hạn vay:</p>
                <p className="font-medium text-right">{term} năm</p>

                <p className="text-muted-foreground">Số tiền trả mỗi tháng:</p>
                <p className="font-medium text-right">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(monthlyPayment)}
                </p>

                <p className="text-muted-foreground">Tổng tiền lãi:</p>
                <p className="font-medium text-right text-red-500">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalInterest)}
                </p>

                <p className="text-muted-foreground">Tổng số tiền phải trả:</p>
                <p className="font-medium text-right">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalPayment)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
