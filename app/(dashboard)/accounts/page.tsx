"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { columns, Payment } from "./columns"
import { DataTable } from "@/components/data-table";

 
const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "52f728ed",
    amount: 500,
    status: "success",
    email: "e@example.com",
  },
]


const AccountsPage = () => {
  const newAccount = useNewAccount();
  
  return ( 
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Accounts page
          </CardTitle>
          <Button onClick={newAccount.onOpen} size="sm" className="w-full lg:w-auto">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable 
            filterKey="email"
            columns={columns} 
            data={data} 
            onDelete={() => {}}
          />
        </CardContent>
      </Card>
    </div>
  );
};
 
export default AccountsPage;
