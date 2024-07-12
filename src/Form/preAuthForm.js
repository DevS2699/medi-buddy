import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PreAuthorizationForm = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isRsbmMsby, setIsRsbmMsby] = useState(false);
  const [maid, setMaid] = useState('');
  const [corporateName, setCorporateName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [insurerName, setInsurerName] = useState('');
  const [inPatientNumber, setInPatientNumber] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientId, setPatientId] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [insuranceInfo, setInsuranceInfo] = useState('');
  const [preExistingConditions, setPreExistingConditions] = useState('');
  const [allergies, setAllergies] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [dateOfAdmission, setDateOfAdmission] = useState('');
  const [dateOfDischarge, setDateOfDischarge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [procedure, setProcedure] = useState('');
  const [admissionType, setAdmissionType] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [providedRoomType, setProvidedRoomType] = useState('');

  const [signedPreAuthorizationForm, setSignedPreAuthorizationForm] = useState(null);
  const [idProof, setIdProof] = useState(null);
  const [diagnosticReports, setDiagnosticReports] = useState(null);
  const [otherRelevantDocuments, setOtherRelevantDocuments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle the form submission
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('mobileNumber', mobileNumber);
    formData.append('isRsbmMsby', isRsbmMsby);
    formData.append('maid', maid);
    formData.append('corporateName', corporateName);
    formData.append('employeeId', employeeId);
    formData.append('policyNumber', policyNumber);
    formData.append('insurerName', insurerName);
    formData.append('inPatientNumber', inPatientNumber);
    formData.append('patientName', patientName);
    formData.append('patientId', patientId);
    formData.append('gender', gender);
    formData.append('age', age);
    formData.append('address', address);
    formData.append('phoneNumber', phoneNumber);
    formData.append('insuranceInfo', insuranceInfo);
    formData.append('preExistingConditions', preExistingConditions);
    formData.append('allergies', allergies);
    formData.append('emergencyContact', emergencyContact);
    formData.append('dateOfAdmission', dateOfAdmission);
    formData.append('dateOfDischarge', dateOfDischarge);
    formData.append('diagnosis', diagnosis);
    formData.append('procedure', procedure);
    formData.append('admissionType', admissionType);
    formData.append('estimatedAmount', estimatedAmount);
    formData.append('doctorName', doctorName);
    formData.append('providedRoomType', providedRoomType);

    if (signedPreAuthorizationForm) {
      formData.append('signedPreAuthorizationForm', signedPreAuthorizationForm);
    }
    if (idProof) {
      formData.append('idProof', idProof);
    }
    if (diagnosticReports) {
      formData.append('diagnosticReports', diagnosticReports);
    }
    if (otherRelevantDocuments) {
      formData.append('otherRelevantDocuments', otherRelevantDocuments);
    }

    // Here you would typically send the formData to the server
    // For example:
    // fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // }).then(response => {
    //   // Handle response
    // });

    console.log('Form submitted');
  };

  return (
    <div className="container mt-5">
  <h2>Pre-Authorization Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="fullName" className="form-label">Full Name <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="mobileNumber" className="form-label">Mobile Number <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
      </div>
    </div>
    <div className="form-check mb-3">
      <input
        type="checkbox"
        className="form-check-input"
        id="rsbmMsby"
        checked={isRsbmMsby}
        onChange={(e) => setIsRsbmMsby(e.target.checked)}
        required
      />
      <label className="form-check-label" htmlFor="rsbmMsby">Check this box if claim is an RSBY/MSBY</label>
    </div>

    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="maid" className="form-label">MAID <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="maid"
          value={maid}
          onChange={(e) => setMaid(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="corporateName" className="form-label">Corporate Name <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="corporateName"
          value={corporateName}
          onChange={(e) => setCorporateName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="employeeId" className="form-label">Employee ID <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="policyNumber" className="form-label">Policy Number <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="policyNumber"
          value={policyNumber}
          onChange={(e) => setPolicyNumber(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="insurerName" className="form-label">Insurer Name </label>
        <input
          type="text"
          className="form-control"
          id="insurerName"
          value={insurerName}
          onChange={(e) => setInsurerName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inPatientNumber" className="form-label">In-Patient Number </label>
        <input
          type="text"
          className="form-control"
          id="inPatientNumber"
          value={inPatientNumber}
          onChange={(e) => setInPatientNumber(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="patientName" className="form-label">Patient Name <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="patientId" className="form-label">Patient ID <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="patientId"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="gender" className="form-label">Gender <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="age" className="form-label">Age <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="address" className="form-label">Address <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="phoneNumber" className="form-label">Phone Number <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="insuranceInfo" className="form-label">Insurance Info <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="insuranceInfo"
          value={insuranceInfo}
          onChange={(e) => setInsuranceInfo(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="preExistingConditions" className="form-label">Pre-Existing Conditions <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="preExistingConditions"
          value={preExistingConditions}
          onChange={(e) => setPreExistingConditions(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="allergies" className="form-label">Allergies <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="allergies"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="emergencyContact" className="form-label">Emergency Contact <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="emergencyContact"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="dateOfAdmission" className="form-label">Date of Admission <span style={{ color: 'red' }}>*</span></label>
        <input
          type="date"
          className="form-control"
          id="dateOfAdmission"
          value={dateOfAdmission}
          onChange={(e) => setDateOfAdmission(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="dateOfDischarge" className="form-label">Date of Discharge <span style={{ color: 'red' }}>*</span></label>
        <input
          type="date"
          className="form-control"
          id="dateOfDischarge"
          value={dateOfDischarge}
          onChange={(e) => setDateOfDischarge(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="diagnosis" className="form-label">Diagnosis <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="procedure" className="form-label">Procedure <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="admissionType" className="form-label">Admission Type <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="admissionType"
          value={admissionType}
          onChange={(e) => setAdmissionType(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="estimatedAmount" className="form-label">Estimated Amount <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="estimatedAmount"
          value={estimatedAmount}
          onChange={(e) => setEstimatedAmount(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="doctorName" className="form-label">Doctor Name <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="doctorName"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="providedRoomType" className="form-label">Provided Room Type <span style={{ color: 'red' }}>*</span></label>
        <input
          type="text"
          className="form-control"
          id="providedRoomType"
          value={providedRoomType}
          onChange={(e) => setProvidedRoomType(e.target.value)}
          required
        />
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="signedPreAuthorizationForm" className="form-label">Signed Pre-Authorization Form</label>
      <input
        type="file"
        className="form-control"
        id="signedPreAuthorizationForm"
        onChange={(e) => setSignedPreAuthorizationForm(e.target.files[0])}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="idProof" className="form-label">ID Proof</label>
      <input
        type="file"
        className="form-control"
        id="idProof"
        onChange={(e) => setIdProof(e.target.files[0])}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="diagnosticReports" className="form-label">Diagnostic Reports</label>
      <input
        type="file"
        className="form-control"
        id="diagnosticReports"
        onChange={(e) => setDiagnosticReports(e.target.files[0])}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="otherRelevantDocuments" className="form-label">Other Relevant Documents</label>
      <input
        type="file"
        className="form-control"
        id="otherRelevantDocuments"
        onChange={(e) => setOtherRelevantDocuments(e.target.files[0])}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">Submit New Admission</button>
  </form>
</div>


  );
};

export default PreAuthorizationForm;
