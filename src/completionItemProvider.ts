import { TextDocument, Position, Range, CompletionItem, SnippetString, CompletionItemKind } from "vscode";

export const completionTemplateProvider = {
	provideCompletionItems: (document: TextDocument, position: Position) => {
		const nextCharacterPosition = position.with({
			character: position.character + 1
		});
		const range = new Range(position, nextCharacterPosition);

		// 「``」の間にカーソルがいる時
		if (document.getText(range) === "`") {
			const blockCompletionItemBetweenTicks = new CompletionItem("テンプレートリテラルを展開する");
			blockCompletionItemBetweenTicks.insertText = new SnippetString("\n\t$0\n");
			blockCompletionItemBetweenTicks.kind = CompletionItemKind.Snippet;
			blockCompletionItemBetweenTicks.documentation = "CSSブロックを作成\ncss`\n\t（CSSを記述）\n`";

			return [blockCompletionItemBetweenTicks];
		}

		return [];
	}
};
