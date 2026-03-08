module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/comfyanonymous/ComfyUI_examples"
      ],
      path: "app/user/default/workflows"
    }
  }, {
    method: "shell.run",
    params: {
      message: [
        "git pull"
      ],
      path: "app/user/default/workflows/ComfyUI_examples"
    }
  }, {
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/cocktailpeanut/comfy_json_workflow"
      ],
      path: "app/user/default/workflows"
    }
  }, {
    method: "shell.run",
    params: {
      message: [
        "git pull"
      ],
      path: "app/user/default/workflows/comfy_json_workflow"
    }
  }, {
    when: "{{!exists('app/custom_nodes/ComfyUI-GGUF')}}",
    method: "shell.run",
    params: {
      message: "git clone https://github.com/city96/ComfyUI-GGUF",
      path: "app/custom_nodes"
    }
  }, {
    when: "{{exists('app/custom_nodes/ComfyUI-GGUF')}}",
    method: "shell.run",
    params: {
      message: "git pull",
      path: "app/custom_nodes/ComfyUI-GGUF"
    }
  }, {
    when: "{{!exists('app/custom_nodes/ComfyUI-KJNodes')}}",
    method: "shell.run",
    params: {
      message: "git clone https://github.com/kijai/ComfyUI-KJNodes",
      path: "app/custom_nodes"
    }
  }, {
    when: "{{exists('app/custom_nodes/ComfyUI-KJNodes')}}",
    method: "shell.run",
    params: {
      message: "git pull",
      path: "app/custom_nodes/ComfyUI-KJNodes"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      venv: "env",
      message: [
        "uv pip install -r requirements.txt",
        "uv pip install -r custom_nodes/ComfyUI-GGUF/requirements.txt",
        "uv pip install -r custom_nodes/ComfyUI-KJNodes/requirements.txt"
      ],
    }
  }]
}
