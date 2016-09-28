---
layout: post
title:  "Hello World in ASM!"
date:   2016-09-28 12:00:00 +1000
categories: jekyll update
---

This is a basic guide to make a hello world program in assembly. This guide works for i386_x86-64 linux machines. It has only been tested on ubuntu 16.04.

> section     .text
> global      _start                              ;must be declared >for linker (ld)
>
> _start:                                         ;tell linker entry point
>
>    mov     edx,len                             ;message length
>    mov     ecx,msg                             ;message to write
>    mov     ebx,1                               ;file descriptor >(stdout)
>    mov     eax,4                               ;system call >number (sys_write)
>    int     0x80                                ;call kernel
>
>    mov     eax,1                               ;system call >number (sys_exit)
>    int     0x80                                ;call kernel
>
> section     .data
>
> msg     db  'Hello, world!',0xa                 ;our dear string
> len     equ $ - msg                             ;length of our >dear string

to compile
> $ nasm -f elf hello.asm

to run
> $ ld -m elf_i386  -s -o hello hello.o

##### And thats all :)
