import { TextDocument, Position, Range, CompletionItem, SnippetString, CompletionItemKind } from "vscode";

export const completionCssProvider = {
	provideCompletionItems: (document: TextDocument, position: Position) => {
		const completionItem = new CompletionItem("Hello World");
		completionItem.detail = "detail";
		completionItem.documentation = "documentation";
		completionItem.kind = CompletionItemKind.Text;
		completionItem.insertText = "Hello World";

		return [completionItem];
	}
};
