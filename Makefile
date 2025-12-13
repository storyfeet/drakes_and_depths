out/cards.ps: cards/*
	 cardito build -f cards/main.ito --cards cards/diss.crd cards/skills.crd cards/values.crd  cards/primary.crd --multipage out/cards.ps --format ps
