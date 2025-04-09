"use server";

export async function fetchEarningsDeductionsHeaders(values: {
  appointment_status: string;
  year: number;
  payroll_type: string;
  advno: string;
  fund: string;
}) {
  try {
    const { appointment_status, year, payroll_type, advno, fund } = values;

    const baseUrl =
      payroll_type === "regular"
        ? `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/earnings-mandatory-deductions-header`
        : `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/earnings-deductions-header`;

    const url = new URL(baseUrl);

    if (advno) url.searchParams.append("advno", advno);
    if (fund) url.searchParams.append("fund", fund);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: [],
        error: "Failed to fetch data. Please try again.",
      };
    }

    const data = await response.json();
    console.log("Actions fetchEarningsDeductionsHeaders: ", data);

    return data;
  } catch (error) {
    return {
      body: [],
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function fetchEarningsMandatoryDeductions(values: {
  appointment_status: string;
  year: number;
  period: number;
  advno: string;
  carded_date: string;
  fund: string;
}) {
  try {
    const { appointment_status, year, period, advno, carded_date, fund } =
      values;

    const baseUrl = `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/earnings-mandatory-deductions`;

    const url = new URL(baseUrl);

    if (period) url.searchParams.append("period", period.toString());
    if (advno) url.searchParams.append("advno", advno);
    if (carded_date) url.searchParams.append("carded_date", carded_date);
    if (fund) url.searchParams.append("fund", fund);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: [],
        error: "Failed to fetch data. Please try again.",
      };
    }

    const data = await response.json();
    console.log("Actions fetchEarningsMandatoryDeductions: ", data);

    return data;
  } catch (error) {
    return {
      body: [],
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function fetchOtherDeductions(values: {
  appointment_status: string;
  year: number;
  period: number;
  advno: string;
  carded_date: string;
}) {
  try {
    const { appointment_status, year, period, advno, carded_date } = values;

    const baseUrl = `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/other-deductions`;

    const url = new URL(baseUrl);

    if (period) url.searchParams.append("period", period.toString());
    if (advno) url.searchParams.append("advno", advno);
    if (carded_date) url.searchParams.append("carded_date", carded_date);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: [],
        error: "Failed to fetch data. Please try again.",
      };
    }

    const data = await response.json();
    console.log("Actions fetchOtherDeductions: ", data);

    return data;
  } catch (error) {
    return {
      body: [],
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function fetchEarningsDeductions(values: {
  appointment_status: string;
  year: number;
  period: number;
  advno: string;
  carded_date: string;
  fund: string;
}) {
  try {
    const { appointment_status, year, period, advno, carded_date, fund } =
      values;

    const baseUrl = `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/earnings-deductions`;

    const url = new URL(baseUrl);

    if (period) url.searchParams.append("period", period.toString());
    if (advno) url.searchParams.append("advno", advno);
    if (carded_date) url.searchParams.append("carded_date", carded_date);
    if (fund) url.searchParams.append("fund", fund);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: [],
        error: "Failed to fetch data. Please try again.",
      };
    }

    const data = await response.json();
    console.log("Actions fetchEarningsDeductions: ", data);

    return data;
  } catch (error) {
    return {
      body: [],
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function fetchRemittances(values: {
  appointment_status: string;
  year: number;
  period: number;
  advno: string;
}) {
  try {
    const { appointment_status, year, period, advno } = values;

    const baseUrl = `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/remittances`;

    const url = new URL(baseUrl);

    if (period) url.searchParams.append("period", period.toString());
    if (advno) url.searchParams.append("advno", advno);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: [],
        error: "Failed to fetch data. Please try again.",
      };
    }

    const data = await response.json();
    console.log("Actions fetchRemittances: ", data);

    return data;
  } catch (error) {
    return {
      body: [],
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function deletePayroll(values: {
  appointment_status: string;
  year: number;
  payroll_type: string;
  period: number;
  advno: string;
  carded_by: string;
  carded_date: string;
  fund: string;
  user: string;
  remarks: string;
}) {
  try {
    const { appointment_status, year, payroll_type, period, advno, carded_by, carded_date, fund, user, remarks } = values;

    const baseUrl =
      payroll_type === "regular"
        ? `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/regular-payrolls`
        : `http://127.0.0.1:8000/api/dBase/${appointment_status}/${year}/special-payrolls`;

    const url = new URL(baseUrl);

    if (period) url.searchParams.append("period", period.toString());
    if (advno) url.searchParams.append("advno", advno);
    if (carded_by) url.searchParams.append("carded_by", carded_by);
    if (carded_date) url.searchParams.append("carded_date", carded_date);
    if (fund) url.searchParams.append("fund", fund);
    if (user) url.searchParams.append("user", user);
    if (remarks) url.searchParams.append("remarks", remarks);

    const response = await fetch(url.toString(), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: [],
        error: "Failed to fetch data. Please try again.",
      };
    }

    const data = await response.json();
    console.log("Actions deletePayroll: ", data);

    return data;
  } catch (error) {
    return {
      body: [],
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function deletePayrolls(values: {
  appt_status: string;
  payroll_type: string;
  year: number;
  adv: string;
  props_list: {
    period: number;
    fund: string;
    carded_date: string;
  }[];
}) {
  console.log("Actions deletePayrolls: ", values);
  try {
    const response = await fetch("http://127.0.0.1:8000/api/payrolls/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return { error: "Failed to delete data. Please try again." };
    }

    const data = await response.json();
    console.log("Actions: ", data);
    return await data; // Return API response as JSON
  } catch (error) {
    return { error: "Server error. Please check the API connection." };
  }
}
