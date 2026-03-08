module.exports = {
  run: [
    // Models
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Kijai/LTXV2_comfy/resolve/main/diffusion_models/ltx-2-19b-distilled_Q4_K_M.gguf",
        dir: "../app/models/diffusion_models"
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Kijai/LTXV2_comfy/resolve/main/text_encoders/ltx-2-19b-embeddings_connector_distill_bf16.safetensors",
        dir: "../app/models/text_encoders"
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/unsloth/gemma-3-12b-it-GGUF/resolve/main/gemma-3-12b-it-Q4_K_M.gguf",
        dir: "../app/models/text_encoders"
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Kijai/LTXV2_comfy/resolve/main/VAE/LTX2_video_vae_bf16.safetensors",
        dir: "../app/models/vae"
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Kijai/LTXV2_comfy/resolve/main/VAE/LTX2_audio_vae_bf16.safetensors",
        dir: "../app/models/vae"
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/Lightricks/LTX-2/resolve/main/ltx-2-spatial-upscaler-x2-1.0.safetensors",
        dir: "../app/models/latent_upscale_models"
      }
    },

    // Custom node: ComfyUI-GGUF (city96)
    {
      when: "{{!exists('../app/custom_nodes/ComfyUI-GGUF')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/city96/ComfyUI-GGUF",
        path: "../app/custom_nodes"
      }
    },
    {
      when: "{{exists('../app/custom_nodes/ComfyUI-GGUF')}}",
      method: "shell.run",
      params: {
        message: "git pull",
        path: "../app/custom_nodes/ComfyUI-GGUF"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "../app",
        message: "uv pip install -r custom_nodes/ComfyUI-GGUF/requirements.txt"
      }
    },

    // Custom node: ComfyUI-KJNodes (Kijai)
    {
      when: "{{!exists('../app/custom_nodes/ComfyUI-KJNodes')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/kijai/ComfyUI-KJNodes",
        path: "../app/custom_nodes"
      }
    },
    {
      when: "{{exists('../app/custom_nodes/ComfyUI-KJNodes')}}",
      method: "shell.run",
      params: {
        message: "git pull",
        path: "../app/custom_nodes/ComfyUI-KJNodes"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "../app",
        message: "uv pip install -r custom_nodes/ComfyUI-KJNodes/requirements.txt"
      }
    },

    // Workflows
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/cocktailpeanut/comfy_json_workflow",
        path: "../app/user/default/workflows"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "git pull",
        path: "../app/user/default/workflows/comfy_json_workflow"
      }
    }
  ]
}
