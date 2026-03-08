module.exports = {
  run: [
    // 1. Main checkpoint — checkpoints/
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/ltx-2.3-22b-dev-fp8.safetensors",
        dir: "../app/models/checkpoints"
      }
    },
    // 2. Gemma text encoder — text_encoders/
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/gemma_3_12B_it_fp4_mixed.safetensors",
        dir: "../app/models/text_encoders"
      }
    },
    // 3. Distilled LoRA — loras/
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/ltx-2.3-22b-distilled-lora-384.safetensors",
        dir: "../app/models/loras"
      }
    },
    // 4. Spatial upscaler — upscale_models/
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/ltx-2.3-spatial-upscaler-x2-1.0.safetensors",
        dir: "../app/models/upscale_models"
      }
    }
  ]
}
