import re

const ContentSection = ({ title, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h2>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
};