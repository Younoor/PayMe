interface Transaction {
    id: string;
    amount: string;
    description: number;
    date: Date;
}

interface Props {
    transaction: Transaction;
}

const TransactionItem: React.FC<Props> = ({ transaction }) => {
    return (
        <div>
            <p>Amount: ${transaction.amount}</p>
            <p>Description: {transaction.description}</p>
            <p>Date: transaction.date.toDateString()</p>
        </div>
    );
};

export default TransactionItem;