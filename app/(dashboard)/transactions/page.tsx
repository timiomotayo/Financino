import { Suspense } from "react";

import TransactionsPageContent, {
  TransactionsPageSkeleton,
} from "./transactions-page-content";

const TransactionsPage = () => (
  <Suspense fallback={<TransactionsPageSkeleton />}>
    <TransactionsPageContent />
  </Suspense>
);

export default TransactionsPage;
