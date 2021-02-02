// Handle an entity browser entity click; guidID represents the ID of the selected entity
function E_C(guidID) {
strURL = guidID + '.htm';
document.getElementById('iframeMain').src = strURL;
}

// Fill entity browser based on the selected folder/package; guidID represents the ID Of the selected folder or package
function FillEntityBrowser(guidID) {
strEntities = '(no entities present)';

if (guidID == '0f7e7123-0188-4249-af06-17bd15839ea6') {
strEntities = "<span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_d2c054c3-1801-4fd3-81bd-e6ee696457e1')\">C Earth Observation System Context</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_ffc698c3-f4ce-43c0-a744-8d25ddfceed5')\">C.1 CubeSat</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_f3e8608a-bab7-493d-b7ce-8d614fc244b5')\">C.2 Ground Station</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_2f0d877e-f597-4b75-a17f-b649573ef870')\">E Earth</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_9e50580a-bc24-4d52-8a25-59982a498b04')\">G GPS</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_7df9593d-9895-4fcc-9789-d1b33ecc47e9')\">LS Launch Service</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_d6866885-c2a1-4949-8379-d6c20a9d3de4')\">MO Mission Operator</span><br />"
}
else if (guidID == '18f36831-03b8-4d14-89cc-00a981def236') {
strEntities = "<span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_a155b176-1040-4bf4-aa6b-e4e0dafd09fd')\">Deployment Control</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_2323fcfa-0748-4e80-8503-d1350a89a25c')\">Guidance &amp; Navigation</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_fd7716a4-e09f-412d-9f99-680c279d8705')\">Location</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_0627bf03-d93f-4638-9459-3f2ea7e33be4')\">Mission Control</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_17ef2868-3b4c-401e-a8b7-d2ea75bf277b')\">Mission Payload</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_c2f45277-81ca-4870-89cd-300f0c947a55')\">Observation</span><br />"
}
else if (guidID == 'ab70da3b-1963-41e0-817e-f663e54f6681') {
strEntities = "<span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_9f5f8c89-219d-44a1-ac21-b18689d5dfa3')\">1 Virginia Tech</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_4423a899-8818-4dda-bc72-82fc03e3c0bb')\">2 University of Virginia</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_a6e2c5f0-8851-45aa-b495-bbbee647078b')\">3 University of Southern California</span><br />"
}
else if (guidID == 'f5a2162d-74d3-47a0-9b8b-e51d12db78a0') {
strEntities = "<span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_8713c517-fe38-4fd9-9988-141c4862c0d2')\">REQ.1 The earth observation system shall monitor United States weather patterns.</span><br />"
}
else if (guidID == 'fcbe73fa-9d51-4d60-af41-6e728a715264') {
strEntities = "<span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_8b55ba06-c7dd-40b2-bf8c-daf10cfdd352')\">UC Earth Observation</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_6490a095-835f-4181-8ba8-5ca8e83d3fd6')\">UC.1 Deploy CubeSat</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_df7939f4-9a08-481c-9537-837f56f36e7a')\">UC.2 Provide Guidance &amp; Navigation</span><br /><span class='cNdeLink' onclick=\"E_C('f3d9d2c6-6332-47e4-910a-24514a5b5682_0d0d7999-fb7b-4b6c-8ec9-789812a96cea')\">UC.3 Collect Mission Payload</span><br />"
}

document.getElementById('tdEntitiesBorder').innerHTML = strEntities;
}
