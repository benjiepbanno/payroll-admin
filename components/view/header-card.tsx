import { useEarningsDeductionsHeadersPropsStore } from "@/store/props-store";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HeaderCard() {
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();

  return (
    <Card className="shadow-none">
      <CardContent>
        <div className="pt-4 space-y-6">
          <div className="flex gap-4 justify-between">
            <div className="">
              <Label>Office</Label>
              <Input
                value={earnings_deductions_headers_props.office ?? ""}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Period</Label>
              <Input
                value={earnings_deductions_headers_props.period ?? 0}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Type</Label>
              <Input
                value={earnings_deductions_headers_props.type ?? ""}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Gross</Label>
              <Input
                value={Number(earnings_deductions_headers_props.gross).toFixed(
                  2
                )}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Net</Label>
              <Input
                value={Number(earnings_deductions_headers_props.net).toFixed(2)}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Fund</Label>
              <Input
                value={earnings_deductions_headers_props.fund ?? ""}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Carded By</Label>
              <Input
                value={earnings_deductions_headers_props.carded_by ?? ""}
                disabled
              ></Input>
            </div>
            <div className="">
              <Label>Carded Date</Label>
              <Input
                value={earnings_deductions_headers_props.carded_date ?? ""}
                disabled
              ></Input>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
