import { spawn } from 'child_process'

// Start Vite development server
const viteProcess = spawn('npx', ['vite', '--port=5000', '--host=0.0.0.0'], {
  stdio: 'inherit',
  cwd: process.cwd()
})

viteProcess.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`)
})