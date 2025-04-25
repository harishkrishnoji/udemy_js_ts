import React, { useState } from 'react';
import "../../styles/InputForm.css";

const ConditionalForm = () => {
  const [formData, setFormData] = useState({
    userType: '',
    service_type: '',
    graduationYear: '',
    ssl_service: '',
    companyName: '',
    jobTitle: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h1 class="organge">Provision LoadBalancing VIP</h1><br />
      <form>
        {/* Basic field - always shown */}
        <div className="form-group">
          <label>VIP Type:</label>
          <select 
            name="userType" 
            value={formData.userType} 
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="standard">Standard VIP</option>
            <option value="ssl_vip">SSL VIP</option>
          </select>
        </div>

        {/* Fields that appear based on userType */}
        {formData.userType === 'standard' && (
          <>
            <div className="form-group">
              <label>Service Type:</label>
              <select 
                name="service_type" 
                value={formData.service_type} 
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="standard_service_tcp">TCP</option>
                <option value="standard_service_http">HTTP</option>
                <option value="standard_service_udp">UDP</option>
              </select>
            </div>

            {formData.service_type && (
              // <div className="form-group">
              //   <label>Expected Graduation Year:</label>
              //   <input 
              //     type="number" 
              //     name="graduationYear" 
              //     value={formData.graduationYear} 
              //     onChange={handleChange}
              //     min={new Date().getFullYear()}
              //     max={new Date().getFullYear() + 10}
              //     required
              //   />
              // </div>
              <div className="form-group">
              <label>Enter Server IP address:</label>
              <input 
                type="text" 
                name="server_ipaddr" 
                value={formData.server_ipaddr} 
                onChange={handleChange}
                required
              />
              </div>
            )}
          </>
        )}

        {formData.userType === 'ssl_vip' && (
          <>
            <div className="form-group">
              <label>SSL Service Type:</label>
              <select 
                name="ssl_service" 
                value={formData.ssl_service} 
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="ssl_service_http">SSL HTTP</option>
                <option value="ssl_service_tcp">SSL TCP</option>
              </select>
            </div>

            {formData.ssl_service === 'ssl_service_http' && (
              <>
              <div className="form-group">
              <label>Enter Server IP address:</label>
              <input 
                type="text" 
                name="server_ipaddr" 
                value={formData.server_ipaddr} 
                onChange={handleChange}
                required
              />
              </div>
              <div className="form-group">
                <label>AD Group Name:</label>
                <input 
                  type="text" 
                  name="ad_groupname" 
                  value={formData.ad_groupname} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>APM Number:</label>
                <input 
                  type="text" 
                  name="apm_number" 
                  value={formData.apm_number} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>VIP URL / FQDN:</label>
                <input 
                  type="text" 
                  name="vip_fqdn" 
                  value={formData.vip_fqdn} 
                  onChange={handleChange}
                  required
                />
              </div>
              </>

            )}

            {(formData.ssl_service === 'ssl_service_tcp' || formData.ssl_service === 'self-employed') && (
              <div className="form-group">
              <label>APM Number:</label>
              <input 
                type="text" 
                name="apm_number" 
                value={formData.apm_number} 
                onChange={handleChange}
                required
              />
            </div>
            )}
          </>
        )}

        <button class="gbutton" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConditionalForm;