"use client";
import React, { useState } from "react";
import EmailSignup from "@/app/components/EmailSignup";
import VerifyPhoneNumber from "@/app/components/VerifyPhoneNumber";
import CodeVerification from "@/app/components/CodeVerification";
export default function RegisterPage() {
  const [page, setPage] = useState(1);
  const [agreed, setAgreed] = useState(false)
  const [phone, setPhone] = useState({
    number: "",
    otp: "",
  });
  const nextPage = () => {
    if (page < 3) {
      setPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      {page == 1 ? (
        <EmailSignup nextPage={nextPage} />
      ) : page == 2 ? (
        <VerifyPhoneNumber
          nextPage={nextPage}
          agreed = {agreed}
          setAgreed={(e) => setAgreed(e.target.checked)}
          phone={phone.number}
          phoneChangeHandler={(e) =>
            setPhone((prev) => ({ ...prev, number: e.target.value }))
          }
        />
      ) : (
        <CodeVerification
          handlePrevious={previousPage}
          otp={phone.otp}
          otpChange={(e) => {
            if (/^\d+$/.test(e.target.value) || !e.target.value) {
              if (e.target.value.length <= 6)
                setPhone((prev) => ({ ...prev, otp: e.target.value }));
            }
          }}
        />
      )}
    </div>
  );
}
