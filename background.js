chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "convertToPDF",
      title: "Convert page text to PDF",
      contexts: ["page", "selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "convertToPDF") {
      const selectedText = info.selectionText;
  
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: function (text) {
            fetch('http://localhost:5000/api/generate-pdf', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text: text || document.body.innerText })
            })
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => {
              const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'output.pdf';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            })
            .catch(console.error);
          },
          args: [selectedText]
        });
      });
    }
  });
  