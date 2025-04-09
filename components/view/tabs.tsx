import { Tabs } from "@/components/ui/tabs";
import { RegularTabsList, SpecialTabsList } from "./tabs-list";
import {
  EarningsMandatoryDeductionsTabsContent,
  OtherDeductionsTabsContent,
  RemittancesTabsContent as RegularRemittancesTabsContent,
} from "./regular-tabs-content";
import {
  EarningsDeductionsTabsContent,
  RemittancesTabsContent as SpecialRemittancesTabsContent,
} from "./special-tabs-content";

export function RegularTabs() {
  return (
    <Tabs defaultValue="emd" className="space-y-6">
      <RegularTabsList />
      <EarningsMandatoryDeductionsTabsContent />
      <OtherDeductionsTabsContent />
      <RegularRemittancesTabsContent />
    </Tabs>
  );
}

export function SpecialTabs() {
  return (
    <Tabs defaultValue="ed" className="space-y-6">
      <SpecialTabsList />
      <EarningsDeductionsTabsContent />
      <SpecialRemittancesTabsContent />
    </Tabs>
  );
}
