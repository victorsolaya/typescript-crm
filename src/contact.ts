class ContactMainForm {
    public OnLoad(executionContext: Xrm.Page.EventContext) {
        const formContext = executionContext.getFormContext() as Xrm.FormContext;
        formContext.ui.setFormNotification("Typescript locked and loaded!", "INFO", "ts-msg");
    }
}

// We would need to initialize the class always.
(window as any).ContactMainForm = new ContactMainForm();