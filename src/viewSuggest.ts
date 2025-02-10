import { commands, window, workspace } from "vscode";
import { getDefaultCSSDataProvider } from "vscode-css-languageservice";

export const viewSuggest = workspace.onDidChangeTextDocument((event) => {
	const editor = window.activeTextEditor;
	if (editor == undefined || editor.document !== event.document) {
		return;
	}

	if (editor.document.languageId !== "astro") {
		return;
	}

	// 変更があった最後の文字
	const change = event.contentChanges[0];
	if (change === undefined) {
		return;
	}

	const cursorOffset = event.document.offsetAt(editor.selection.active);

	const regex = /css`([\s\S]*?)`/g;
	let match;
	let find = false;
	while ((match = regex.exec(event.document.getText())) !== null) {
		const start = match.index;
		const end = start + match[0].length;

		if (cursorOffset >= start && cursorOffset <= end && match[1].replaceAll(/[\r\n|\t]+/g, "") !== "") {
			console.log(match);
			find = true;
			break;
		}
	}

	if (find) {
		console.log(change);
		const cssDataProvider = getDefaultCSSDataProvider();
		const properties = cssDataProvider.provideProperties();
		console.log(properties);
		commands.executeCommand("editor.action.triggerSuggest");
	}
});
