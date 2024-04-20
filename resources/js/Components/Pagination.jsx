import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="flex justify-center mt-4">
            <nav className="relative z-0 inline-flex shadow-sm">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`${
                            link.active ? "bg-indigo-500 text-white" : "bg-white border-gray-300 text-gray-500"
                        } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </nav>
        </div>
    );
}
