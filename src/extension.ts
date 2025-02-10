import { ExtensionContext, languages, DocumentSelector } from "vscode";
import { colorProvider } from "./colorProvider";
import { completionTemplateProvider } from "./completionItemProvider";

export const documentSelector: DocumentSelector = [{ scheme: "file", language: "astro" }];

export function activate(context: ExtensionContext) {
	// テンプレートリテラルの入力補完
	context.subscriptions.push(
		languages.registerCompletionItemProvider(documentSelector, completionTemplateProvider, "`")
	);

	// カラーパレッド
	context.subscriptions.push(languages.registerColorProvider(documentSelector, colorProvider));
}
