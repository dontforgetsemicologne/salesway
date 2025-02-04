'use client'

interface FeedbackCategory {
    label: string;
    count: number;
    color: string;
}
  
interface CustomerFeedbackProps {
    categories: FeedbackCategory[];
}
  
export default function CustomerFeedback({ categories }: CustomerFeedbackProps) {
    const total = categories.reduce((sum, category) => sum + category.count, 0);
  
    const getSentiment = () => {
        if (total === 0) return "No feedback yet";
        const positiveRatio = categories[2].count / total;
        if (positiveRatio > 0.6) return "Mostly positive";
        if (positiveRatio > 0.4) return "Mixed";
        return "Mostly negative";
    };
  
    const getWidth = (count: number) => {
        return `${(count / total * 100).toFixed(1)}%`;
    };
  
    return (
        <div className="bg-white rounded-xl shadow-sm px-6 pt-4 pb-2.5">
            <h3 className="text-base font-medium mb-1 text-gray-400">Community feedback</h3>
            <p className="text-xl font-semibold mb-3">{getSentiment()}</p>
        
            <div className="flex gap-0.5 mb-3">
                {categories.map((category, index) => (
                    <div
                        key={category.label}
                        className={`h-2 ${category.color} rounded-full`}
                        style={{ width: getWidth(category.count) }}
                    />
                ))}
            </div>

            <div className="flex justify-between text-sm text-gray-600">
                {categories.map((category) => (
                    <div key={category.label}>
                        <p>{category.label}</p>
                        <p className="font-semibold text-black">{category.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};