-- CreateIndex
CREATE INDEX "Disputa_editalId_idx" ON "Disputa"("editalId");

-- CreateIndex
CREATE INDEX "Disputa_status_idx" ON "Disputa"("status");

-- CreateIndex
CREATE INDEX "Disputa_inicio_idx" ON "Disputa"("inicio");

-- CreateIndex
CREATE INDEX "Lance_disputaId_valorCentavos_idx" ON "Lance"("disputaId", "valorCentavos");

-- CreateIndex
CREATE INDEX "Lance_licitanteId_idx" ON "Lance"("licitanteId");

-- CreateIndex
CREATE INDEX "MensagemChat_disputaId_idx" ON "MensagemChat"("disputaId");
