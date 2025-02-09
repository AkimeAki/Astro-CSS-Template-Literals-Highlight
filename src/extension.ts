import { ExtensionContext, languages, DocumentSelector } from "vscode";
import { colorProvider } from "./colorProvider";
import { provideCompletionItems } from "./completionItemProvider";

export const documentSelector: DocumentSelector = [{ scheme: "file", language: "astro" }];

export function activate(context: ExtensionContext) {
	// 入力補完
	context.subscriptions.push(
		languages.registerCompletionItemProvider(
			documentSelector,
			{
				provideCompletionItems
			},
			"`"
		)
	);

	// カラーパレッド
	context.subscriptions.push(languages.registerColorProvider(documentSelector, colorProvider));
}
