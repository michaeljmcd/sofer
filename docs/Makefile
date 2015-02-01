all: spec.html toolchain.html

spec.html: spec.md
	pandoc spec.md -o spec.html --smart --standalone --toc

toolchain.html: toolchain.md
	pandoc toolchain.md -o toolchain.html --smart --standalone
