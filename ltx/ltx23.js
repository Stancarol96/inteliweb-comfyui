module.exports = {
  run: [
    // Main checkpoint (fp8 dev, 13B)
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/ltxv-13b-0.9.8-dev-fp8.safetensors",
        dir: "../app/models/checkpoints"
      }
    },
    // Spatial upscaler
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/ltxv-spatial-upscaler-0.9.8.safetensors",
        dir: "../app/models/upscale_models"
      }
    },
    // Temporal upscaler
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-Video/resolve/main/ltxv-temporal-upscaler-0.9.8.safetensors",
        dir: "../app/models/upscale_models"
      }
    }
  ]
}
