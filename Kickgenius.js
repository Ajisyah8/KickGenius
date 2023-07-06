<script>
  window.watsonAssistantChatOptions = {
    integrationID: "1e240f52-7e3b-46a7-8b78-543430c2b1b4", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "657ab305-19f7-4a6e-9e12-719dd469e30e", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>