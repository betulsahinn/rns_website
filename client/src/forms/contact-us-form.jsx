import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT } from "@/graphql/mutations";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [createContact, { loading }] = useMutation(CREATE_CONTACT, {
    onCompleted: (data) => {
      if (data.createContact.success) {
        // Reset form
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          message: ""
        });
      }
    },
    onError: (error) => {
      console.error("Contact form submission error:", error);
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone || !formData.message) {
      return;
    }

    // Email formatı validasyon kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    try {
      await createContact({
        variables: {
          input: {
            ...formData,
          }
        }
      });
    } catch (error) {
      // Error is handled by onError callback
    }
  };

  return (
      <>
        <form onSubmit={handleSubmit} className="box">
          <div className="row gx-20">
            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input
                    type="text"
                    className="inputText"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    required
                />
                <span className="floating-label">Adınız Soyadınız</span>
              </div>
            </div>

            <div className="col-12">
              <div className="postbox__comment-input mb-30">
                <input
                    type="email"
                    className="inputText"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <span className="floating-label">E-mail adresiniz</span>
              </div>
            </div>

            <div className="col-12">
              <div className="postbox__comment-input mb-35">
                <input
                    type="tel"
                    className="inputText"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <span className="floating-label">Telefon Numaranız</span>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="postbox__comment-input mb-30">
              <textarea
                  className="textareaText"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
              ></textarea>
                <span className="floating-label-2">Mesajınız...</span>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="postbox__btn-box">
                <button
                    className="submit-btn w-100"
                    type="submit"
                    disabled={loading}
                >
                  {loading ? "Gönderiliyor..." : "Mesajı Gönder"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
  );
};

export default ContactUsForm;