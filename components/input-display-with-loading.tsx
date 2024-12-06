"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { processInput } from "@/actions";

export default function InputDisplay() {
  const [state, formAction, isPending] = useActionState(processInput, null);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      {state?.message && (
        <div className="mb-4 p-3 bg-gray-100 rounded">
          <p className="font-semibold">Displayed Data:</p>
          <p>{state.message}</p>
        </div>
      )}
      <form
        action={formAction}
        className="flex justify-between items-center space-x-4"
      >
        <Input
          type="text"
          name="input"
          placeholder="Enter your data"
          className="w-3/4"
          disabled={isPending}
        />
        <Button type="submit" className="w-1/5" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </>
          ) : state?.message ? (
            "Clear"
          ) : (
            "Process"
          )}
        </Button>
      </form>
    </div>
  );
}
