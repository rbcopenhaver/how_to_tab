@echo off

if not exist node_modules\.bin\jake.cmd (
  echo Building npm modules:
  call npm rebuild
)
call node_modules\.bin\jake %*


