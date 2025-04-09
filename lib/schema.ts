import { z } from "zod";

export const earningsDeductionsHeadersSchema = z.object({
  office: z.string(),
  period: z.number(),
  type: z.string(),
  gross: z.number(),
  net: z.number(),
  fund: z.string(),
  carded_by: z.string(),
  carded_date: z.string(),
});

export type EarningsDeductionsHeaders = z.infer<
  typeof earningsDeductionsHeadersSchema
>;

export const regularEarningsMandatoryDeductionsSchema = z.object({
  period: z.number(),
  paytyp: z.string(),
  advno: z.string(),
  empno: z.string(),
  from: z.number(),
  to: z.number(),
  mrate: z.number(),
  pera: z.number(),
  addcom: z.number(),
  compen: z.number(),
  totded: z.number(),
  glife: z.number(),
  hprem: z.number(),
  mcare: z.number(),
  lwop: z.number(),
  wtax: z.number(),
  gvlife: z.number(),
  gvmed: z.number(),
  gvhdmf: z.number(),
  state: z.number(),
  netpay: z.number(),
  week1: z.number(),
  week2: z.number(),
  week3: z.number(),
  week4: z.number(),
  clscd: z.string(),
  posted: z.string(),
  user: z.string(),
  dtap: z.string(),
  fund: z.string(),
});

export type RegularEarningsMandatoryDeductions = z.infer<
  typeof regularEarningsMandatoryDeductionsSchema
>;

export const regularOtherDeductionsSchema = z.object({
  period: z.number(),
  paytyp: z.string(),
  advno: z.string(),
  empno: z.string(),
  type: z.string(),
  code: z.string(),
  amt: z.number(),
  gov: z.number(),
  user: z.string(),
  dtap: z.string(),
});

export type RegularOtherDeductions = z.infer<
  typeof regularOtherDeductionsSchema
>;

export const specialEarningsDeductionsSchema = z.object({
  period: z.number(),
  type: z.string(),
  advno: z.string(),
  empno: z.string(),
  amt1: z.number(),
  amt2: z.number(),
  tax1: z.number(),
  tax2: z.number(),
  posted: z.string(),
  user: z.string(),
  dtap: z.string(),
  fund: z.string(),
});

export type SpecialEarningsDeductions = z.infer<
  typeof specialEarningsDeductionsSchema
>;

export const remittancesSchema = z.object({
  period: z.number(),
  paytyp: z.string(),
  rmcod: z.string(),
  empno: z.string(),
  advno: z.string(),
  amt: z.number(),
  gov: z.number(),
});

export type Remittances = z.infer<typeof remittancesSchema>;

export const payrollsDeletionSchema = z.object({
  status: z.string(),
  period: z.number(),
  carded_by: z.string(),
  carded_date: z.string(),
})

export type PayrollsDeletion = z.infer<typeof payrollsDeletionSchema>