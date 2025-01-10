import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_FAQS } from '@/graphql/queries';

const AnswerQuestion = ({ style }) => {
    const [activeId, setActiveId] = useState(null);
    const { loading, error, data } = useQuery(GET_ALL_FAQS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // FAQ verilerini sıralama
    const sortedFaqs = [...(data?.getAllFaqs || [])]
        .filter(faq => faq.status) // Sadece aktif olanları göster
        .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

    return (
        <>
            <div className="tp-custom-accordion">
                <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
                    {sortedFaqs.map((item) => (
                        <div
                            onClick={() => setActiveId(item.id)}
                            key={item.id}
                            className={`accordion-items ${activeId === item.id && "tp-faq-active"}`}
                        >
                            <h2 className="accordion-header" id={`faq-${item.id}`}>
                                <button
                                    className={`accordion-buttons ${activeId !== item.id ? 'collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${item.id}`}
                                    aria-expanded={activeId === item.id}
                                    aria-controls={`collapse-${item.id}`}
                                >
                                    {item.question}
                                    <span className="accordion-btn"></span>
                                </button>
                            </h2>
                            <div
                                id={`collapse-${item.id}`}
                                className={`accordion-collapse collapse ${activeId === item.id ? "show" : ""}`}
                                aria-labelledby={`faq-${item.id}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AnswerQuestion;