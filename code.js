"use strict";
// This plugin allows users to replace multiple text elements with lines from a text input
// Show the UI
figma.showUI(__html__, { width: 400, height: 480 });
// Handle messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'cancel') {
        figma.closePlugin();
        return;
    }
    if (msg.type === 'replace-text') {
        const lines = msg.lines;
        const selection = figma.currentPage.selection;
        // Validate selection
        if (selection.length === 0) {
            figma.ui.postMessage({
                type: 'status',
                message: 'Please select at least one text element.',
                status: 'error'
            });
            return;
        }
        // Filter for text nodes only
        const textNodes = [];
        for (const node of selection) {
            if (node.type === 'TEXT') {
                textNodes.push(node);
            }
        }
        if (textNodes.length === 0) {
            figma.ui.postMessage({
                type: 'status',
                message: 'No text elements found in selection. Please select text layers.',
                status: 'error'
            });
            return;
        }
        // Check if lines count matches or provide warning
        if (lines.length < textNodes.length) {
            figma.ui.postMessage({
                type: 'status',
                message: `Warning: You have ${textNodes.length} text elements but only ${lines.length} lines. Some elements will be skipped.`,
                status: 'warning'
            });
        }
        // Replace text in each node
        let replacedCount = 0;
        const maxIterations = Math.min(textNodes.length, lines.length);
        try {
            for (let i = 0; i < maxIterations; i++) {
                const textNode = textNodes[i];
                const newText = lines[i];
                // Load the font before changing text
                await figma.loadFontAsync(textNode.fontName);
                // Replace the text
                textNode.characters = newText;
                replacedCount++;
            }
            // Show success message
            figma.ui.postMessage({
                type: 'status',
                message: `Successfully replaced text in ${replacedCount} element(s).`,
                status: 'success'
            });
            // Close plugin after a short delay
            setTimeout(() => {
                figma.closePlugin(`Replaced text in ${replacedCount} element(s).`);
            }, 1500);
        }
        catch (error) {
            figma.ui.postMessage({
                type: 'status',
                message: `Error: ${error instanceof Error ? error.message : String(error)}`,
                status: 'error'
            });
        }
    }
};
