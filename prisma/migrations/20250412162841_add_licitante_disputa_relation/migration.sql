-- CreateTable
CREATE TABLE "_DisputaToLicitante" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DisputaToLicitante_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DisputaToLicitante_B_index" ON "_DisputaToLicitante"("B");

-- AddForeignKey
ALTER TABLE "_DisputaToLicitante" ADD CONSTRAINT "_DisputaToLicitante_A_fkey" FOREIGN KEY ("A") REFERENCES "Disputa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisputaToLicitante" ADD CONSTRAINT "_DisputaToLicitante_B_fkey" FOREIGN KEY ("B") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
