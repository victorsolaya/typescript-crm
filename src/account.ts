namespace VSanchez {
    export class AccountMainForm {
        static OnLoad(executionContext: Xrm.Page.EventContext) {
            const formContext = executionContext.getFormContext() as Xrm.FormContext;
            formContext.ui.setFormNotification("Typescript locked and loaded!", "INFO", "ts-msg");
        }
    }
}