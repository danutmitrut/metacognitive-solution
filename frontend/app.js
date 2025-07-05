// Aplicația principală pentru versiunea Vercel
class MetaCognitiveApp {
    constructor() {
        this.currentSection = 'upload';
        this.demoData = {
            technical: {
                title: 'Manual Tehnic - Configurarea Sistemelor de Rețea',
                originalPages: 300,
                chunks: 127,
                reduction: 85,
                actionabilityScore: 0.94,
                entities: {
                    organizations: 23,
                    persons: 15,
                    dates: 45,
                    technical_terms: 156
                },
                sampleChunks: [
                    {
                        id: 1,
                        title: 'Configurarea VLAN-urilor',
                        content: 'Pentru a configura VLAN-urile pe switch-ul Cisco, urmați acești pași: 1. Accesați modul de configurare globală cu comanda "configure terminal". 2. Creați VLAN-ul cu "vlan [număr]" și specificați numele cu "name [nume_vlan]". 3. Atribuiți porturile la VLAN cu "interface [port]" și "switchport access vlan [număr]".',
                        actionabilityScore: 0.95,
                        entities: ['Cisco', 'VLAN', 'configure terminal'],
                        category: 'Implementare'
                    },
                    {
                        id: 2,
                        title: 'Depanarea Problemelor de Conectivitate',
                        content: 'Atunci când întâmpinați probleme de conectivitate, verificați următoarele: 1. Testați conectivitatea fizică cu "ping [IP]". 2. Verificați configurația interfețelor cu "show interfaces". 3. Analizați tabelul de rutare cu "show ip route". 4. Verificați configurația DNS cu "nslookup [domeniu]".',
                        actionabilityScore: 0.92,
                        entities: ['ping', 'show interfaces', 'show ip route', 'nslookup'],
                        category: 'Depanare'
                    },
                    {
                        id: 3,
                        title: 'Implementarea Securității Porturilor',
                        content: 'Pentru a securiza porturile switch-ului: 1. Activați port security cu "switchport port-security". 2. Setați numărul maxim de adrese MAC cu "switchport port-security maximum [număr]". 3. Configurați acțiunea la violarea securității cu "switchport port-security violation [restrict|protect|shutdown]".',
                        actionabilityScore: 0.89,
                        entities: ['port-security', 'MAC', 'violation'],
                        category: 'Securitate'
                    }
                ]
            },
            business: {
                title: 'Rapoarte Business - Strategii de Creștere Q4 2024',
                originalPages: 450,
                chunks: 89,
                reduction: 82,
                actionabilityScore: 0.87,
                entities: {
                    organizations: 45,
                    persons: 28,
                    dates: 67,
                    financial_terms: 123
                },
                sampleChunks: [
                    {
                        id: 1,
                        title: 'Strategia de Expansiune pe Piața Europeană',
                        content: 'Pentru expansiunea pe piața europeană, recomandăm următoarele acțiuni: 1. Înființarea unei filiale în Germania până în Q2 2025. 2. Recrutarea unei echipe locale de 15 persoane. 3. Investiția inițială de 2.5 milioane EUR pentru infrastructură. 4. Lansarea produselor adaptate pentru piața locală în Q3 2025.',
                        actionabilityScore: 0.91,
                        entities: ['Germania', 'Q2 2025', '15 persoane', '2.5 milioane EUR', 'Q3 2025'],
                        category: 'Strategia'
                    },
                    {
                        id: 2,
                        title: 'Optimizarea Proceselor de Vânzări',
                        content: 'Pentru îmbunătățirea performanței echipei de vânzări: 1. Implementați CRM-ul Salesforce până în ianuarie 2025. 2. Organizați training-uri săptămânale pentru echipa de vânzări. 3. Stabiliți KPI-uri clare: 20% creștere a conversiei, reducerea ciclului de vânzări cu 15%. 4. Introduceți sistemul de comisioane bazat pe performanță.',
                        actionabilityScore: 0.88,
                        entities: ['Salesforce', 'ianuarie 2025', '20%', '15%'],
                        category: 'Operațiuni'
                    },
                    {
                        id: 3,
                        title: 'Planul de Marketing Digital',
                        content: 'Strategia de marketing digital pentru 2025: 1. Creșterea bugetului pentru Google Ads cu 40%. 2. Lansarea campaniilor pe LinkedIn și Facebook cu focus pe B2B. 3. Dezvoltarea conținutului video pentru YouTube - 2 videoclipuri pe săptămână. 4. Implementarea marketing automation cu HubSpot.',
                        actionabilityScore: 0.85,
                        entities: ['Google Ads', '40%', 'LinkedIn', 'Facebook', 'YouTube', 'HubSpot'],
                        category: 'Marketing'
                    }
                ]
            },
            academic: {
                title: 'Articole Academice - Inteligența Artificială în Educație',
                originalPages: 180,
                chunks: 67,
                reduction: 78,
                actionabilityScore: 0.83,
                entities: {
                    organizations: 34,
                    persons: 56,
                    dates: 23,
                    academic_terms: 189
                },
                sampleChunks: [
                    {
                        id: 1,
                        title: 'Implementarea Sistemelor de Tutoriat Inteligent',
                        content: 'Pentru implementarea eficientă a sistemelor de tutoriat inteligent în instituțiile educaționale: 1. Evaluați nevoile specifice ale studenților prin sondaje și analize de performanță. 2. Selectați platforma potrivită (recomandăm Carnegie Learning sau Knewton). 3. Antrenați corpul didactic în utilizarea tehnologiei. 4. Monitorizați progresul studenților și ajustați algoritmii în consecință.',
                        actionabilityScore: 0.89,
                        entities: ['Carnegie Learning', 'Knewton', 'tutoriat inteligent'],
                        category: 'Implementare'
                    },
                    {
                        id: 2,
                        title: 'Metodologii de Evaluare Adaptivă',
                        content: 'Evaluarea adaptivă poate fi implementată prin: 1. Utilizarea algoritmilor de Item Response Theory (IRT). 2. Crearea unei baze de date cu întrebări calibrate pe dificultate. 3. Implementarea feedback-ului în timp real pentru studenți. 4. Analiza datelor pentru identificarea lacunelor în învățare și adaptarea curriculum-ului.',
                        actionabilityScore: 0.86,
                        entities: ['Item Response Theory', 'IRT', 'feedback în timp real'],
                        category: 'Metodologie'
                    },
                    {
                        id: 3,
                        title: 'Etica în Utilizarea AI în Educație',
                        content: 'Considerațiile etice pentru implementarea AI în educație includ: 1. Asigurarea transparenței algoritmilor utilizați. 2. Protejarea datelor personale ale studenților conform GDPR. 3. Evitarea bias-ului în evaluarea automată. 4. Menținerea echilibrului între automatizare și interacțiunea umană în procesul educațional.',
                        actionabilityScore: 0.79,
                        entities: ['GDPR', 'bias', 'transparența algoritmilor'],
                        category: 'Etică'
                    }
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupFileUpload();
        this.setupRangeSliders();
        this.showSection('upload');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.showSection(section);
            });
        });

        // Demo examples
        document.querySelectorAll('.example-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const example = e.currentTarget.dataset.example;
                this.showDemoResults(example);
            });
        });

        // Close demo results
        const closeBtn = document.getElementById('close-results');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeDemoResults();
            });
        }

        // Upload button
        const uploadBtn = document.getElementById('upload-btn');
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => {
                this.simulateUpload();
            });
        }

        // Demo links
        document.querySelectorAll('.demo-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection('demo');
            });
        });
    }

    setupFileUpload() {
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        const uploadBtn = document.getElementById('upload-btn');

        // Click to select file
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        // File selection
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleFileSelection(file);
            }
        });

        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileSelection(files[0]);
            }
        });
    }

    setupRangeSliders() {
        const sliders = document.querySelectorAll('input[type="range"]');
        sliders.forEach(slider => {
            const valueSpan = slider.parentElement.querySelector('.range-value');
            
            slider.addEventListener('input', (e) => {
                valueSpan.textContent = e.target.value;
            });
        });
    }

    handleFileSelection(file) {
        const uploadBtn = document.getElementById('upload-btn');
        const uploadArea = document.getElementById('upload-area');
        
        // Validate file
        const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'text/plain'];
        const maxSize = 50 * 1024 * 1024; // 50MB

        if (!validTypes.includes(file.type)) {
            this.showToast('Tip de fișier nesuportat. Utilizați PDF, DOCX, DOC sau TXT.', 'error');
            return;
        }

        if (file.size > maxSize) {
            this.showToast('Fișierul este prea mare. Dimensiunea maximă este 50MB.', 'error');
            return;
        }

        // Update UI
        uploadArea.querySelector('h3').textContent = `Fișier selectat: ${file.name}`;
        uploadArea.querySelector('p').textContent = `Dimensiune: ${this.formatFileSize(file.size)}`;
        uploadBtn.disabled = false;
        uploadBtn.innerHTML = '<i class="fas fa-upload"></i> Încarcă și Procesează (Demo)';

        this.showToast('Fișier selectat cu succes!', 'success');
    }

    simulateUpload() {
        const progressContainer = document.getElementById('progress-container');
        const progressFill = document.getElementById('progress-fill');
        const progressStatus = document.getElementById('progress-status');
        const steps = document.querySelectorAll('.step');

        // Show progress
        progressContainer.style.display = 'block';
        progressContainer.scrollIntoView({ behavior: 'smooth' });

        // Simulate progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Complete all steps
                steps.forEach(step => {
                    step.classList.add('completed');
                    step.classList.remove('active');
                });
                
                progressStatus.textContent = 'Procesare finalizată!';
                
                setTimeout(() => {
                    this.showToast('Procesarea a fost finalizată cu succes! Aceasta este o demonstrație - pentru funcționalitatea completă, instalați backend-ul.', 'success');
                    this.showDemoResults('technical');
                }, 1000);
                
                return;
            }

            progressFill.style.width = `${progress}%`;

            // Update steps
            if (progress < 25) {
                progressStatus.textContent = 'Încărcare fișier...';
                this.updateStepStatus(0, 'active');
            } else if (progress < 50) {
                progressStatus.textContent = 'Procesare text...';
                this.updateStepStatus(0, 'completed');
                this.updateStepStatus(1, 'active');
            } else if (progress < 75) {
                progressStatus.textContent = 'Extragere informații...';
                this.updateStepStatus(1, 'completed');
                this.updateStepStatus(2, 'active');
            } else {
                progressStatus.textContent = 'Finalizare...';
                this.updateStepStatus(2, 'completed');
                this.updateStepStatus(3, 'active');
            }
        }, 200);
    }

    updateStepStatus(index, status) {
        const steps = document.querySelectorAll('.step');
        const step = steps[index];
        
        step.classList.remove('active', 'completed');
        step.classList.add(status);
    }

    showSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Update sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${sectionName}-section`).classList.add('active');

        this.currentSection = sectionName;

        // Close demo results if switching sections
        if (sectionName !== 'demo') {
            this.closeDemoResults();
        }
    }

    showDemoResults(exampleType) {
        const demoResults = document.getElementById('demo-results');
        const resultsTitle = document.getElementById('results-title');
        const resultsContent = document.getElementById('results-content');
        
        const data = this.demoData[exampleType];
        
        resultsTitle.textContent = `Rezultate: ${data.title}`;
        resultsContent.innerHTML = this.generateDemoResultsHTML(data);
        
        demoResults.style.display = 'block';
        demoResults.scrollIntoView({ behavior: 'smooth' });

        // Show section if not already visible
        if (this.currentSection !== 'demo') {
            this.showSection('demo');
        }
    }

    closeDemoResults() {
        const demoResults = document.getElementById('demo-results');
        demoResults.style.display = 'none';
    }

    generateDemoResultsHTML(data) {
        return `
            <div class="demo-results-content">
                <div class="results-summary">
                    <h4>Sumar Procesare</h4>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <span class="summary-label">Pagini originale:</span>
                            <span class="summary-value">${data.originalPages}</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Chunk-uri generate:</span>
                            <span class="summary-value">${data.chunks}</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Reducere dimensiune:</span>
                            <span class="summary-value">${data.reduction}%</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Scor acționalitate:</span>
                            <span class="summary-value">${data.actionabilityScore}</span>
                        </div>
                    </div>
                </div>

                <div class="entities-section">
                    <h4>Entități Identificate</h4>
                    <div class="entities-grid">
                        ${Object.entries(data.entities).map(([key, value]) => `
                            <div class="entity-item">
                                <span class="entity-label">${this.formatEntityLabel(key)}:</span>
                                <span class="entity-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="chunks-section">
                    <h4>Exemple de Chunk-uri cu Acționalitate Ridicată</h4>
                    <div class="chunks-list">
                        ${data.sampleChunks.map(chunk => `
                            <div class="chunk-item">
                                <div class="chunk-header">
                                    <h5>${chunk.title}</h5>
                                    <div class="chunk-meta">
                                        <span class="chunk-score">Scor: ${chunk.actionabilityScore}</span>
                                        <span class="chunk-category">${chunk.category}</span>
                                    </div>
                                </div>
                                <div class="chunk-content">
                                    <p>${chunk.content}</p>
                                </div>
                                <div class="chunk-entities">
                                    <strong>Entități:</strong>
                                    ${chunk.entities.map(entity => `<span class="entity-tag">${entity}</span>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="export-section">
                    <h4>Export pentru GPT Custom</h4>
                    <p>Chunk-urile optimizate pot fi exportate în următoarele formate:</p>
                    <div class="export-buttons">
                        <button class="export-btn" onclick="app.downloadDemo('json', '${Object.keys(this.demoData).find(key => this.demoData[key] === data)}')">
                            <i class="fas fa-download"></i> JSON
                        </button>
                        <button class="export-btn" onclick="app.downloadDemo('txt', '${Object.keys(this.demoData).find(key => this.demoData[key] === data)}')">
                            <i class="fas fa-download"></i> TXT
                        </button>
                        <button class="export-btn" onclick="app.downloadDemo('md', '${Object.keys(this.demoData).find(key => this.demoData[key] === data)}')">
                            <i class="fas fa-download"></i> Markdown
                        </button>
                    </div>
                </div>
            </div>

            <style>
                .demo-results-content {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .results-summary {
                    background: var(--background-color);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                }

                .summary-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .summary-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem;
                    background: var(--surface-color);
                    border-radius: var(--radius-sm);
                }

                .summary-label {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }

                .summary-value {
                    font-weight: 600;
                    color: var(--primary-color);
                }

                .entities-section {
                    background: var(--background-color);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                }

                .entities-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .entity-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.5rem;
                    background: var(--surface-color);
                    border-radius: var(--radius-sm);
                }

                .entity-label {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }

                .entity-value {
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .chunks-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .chunk-item {
                    background: var(--background-color);
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    border-left: 4px solid var(--primary-color);
                }

                .chunk-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    gap: 1rem;
                }

                .chunk-header h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin: 0;
                }

                .chunk-meta {
                    display: flex;
                    gap: 0.5rem;
                    flex-shrink: 0;
                }

                .chunk-score {
                    background: var(--success-color);
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                .chunk-category {
                    background: var(--secondary-color);
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                .chunk-content p {
                    color: var(--text-primary);
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }

                .chunk-entities {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    align-items: center;
                }

                .entity-tag {
                    background: var(--primary-color);
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                }

                .export-section {
                    background: var(--background-color);
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    text-align: center;
                }

                .export-buttons {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-top: 1rem;
                    flex-wrap: wrap;
                }

                .export-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    border-radius: var(--radius-md);
                    font-weight: 500;
                    cursor: pointer;
                    transition: var(--transition);
                }

                .export-btn:hover {
                    background: var(--primary-dark);
                    transform: translateY(-1px);
                }

                @media (max-width: 768px) {
                    .chunk-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .chunk-meta {
                        margin-top: 0.5rem;
                    }

                    .summary-grid,
                    .entities-grid {
                        grid-template-columns: 1fr;
                    }

                    .export-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                }
            </style>
        `;
    }

    formatEntityLabel(key) {
        const labels = {
            organizations: 'Organizații',
            persons: 'Persoane',
            dates: 'Date',
            technical_terms: 'Termeni tehnici',
            financial_terms: 'Termeni financiari',
            academic_terms: 'Termeni academici'
        };
        return labels[key] || key;
    }

    downloadDemo(format, exampleType) {
        const data = this.demoData[exampleType];
        let content = '';
        let filename = '';
        let mimeType = '';

        switch (format) {
            case 'json':
                content = JSON.stringify({
                    title: data.title,
                    summary: {
                        originalPages: data.originalPages,
                        chunks: data.chunks,
                        reduction: data.reduction,
                        actionabilityScore: data.actionabilityScore
                    },
                    entities: data.entities,
                    chunks: data.sampleChunks
                }, null, 2);
                filename = `${exampleType}_demo_export.json`;
                mimeType = 'application/json';
                break;

            case 'txt':
                content = `${data.title}\n\n`;
                content += `Sumar:\n`;
                content += `- Pagini originale: ${data.originalPages}\n`;
                content += `- Chunk-uri generate: ${data.chunks}\n`;
                content += `- Reducere dimensiune: ${data.reduction}%\n`;
                content += `- Scor acționalitate: ${data.actionabilityScore}\n\n`;
                
                content += `Chunk-uri cu acționalitate ridicată:\n\n`;
                data.sampleChunks.forEach((chunk, index) => {
                    content += `${index + 1}. ${chunk.title}\n`;
                    content += `Scor: ${chunk.actionabilityScore} | Categorie: ${chunk.category}\n`;
                    content += `${chunk.content}\n`;
                    content += `Entități: ${chunk.entities.join(', ')}\n\n`;
                });
                filename = `${exampleType}_demo_export.txt`;
                mimeType = 'text/plain';
                break;

            case 'md':
                content = `# ${data.title}\n\n`;
                content += `## Sumar Procesare\n\n`;
                content += `- **Pagini originale:** ${data.originalPages}\n`;
                content += `- **Chunk-uri generate:** ${data.chunks}\n`;
                content += `- **Reducere dimensiune:** ${data.reduction}%\n`;
                content += `- **Scor acționalitate:** ${data.actionabilityScore}\n\n`;
                
                content += `## Entități Identificate\n\n`;
                Object.entries(data.entities).forEach(([key, value]) => {
                    content += `- **${this.formatEntityLabel(key)}:** ${value}\n`;
                });
                
                content += `\n## Chunk-uri cu Acționalitate Ridicată\n\n`;
                data.sampleChunks.forEach((chunk, index) => {
                    content += `### ${index + 1}. ${chunk.title}\n\n`;
                    content += `**Scor:** ${chunk.actionabilityScore} | **Categorie:** ${chunk.category}\n\n`;
                    content += `${chunk.content}\n\n`;
                    content += `**Entități:** ${chunk.entities.map(e => `\`${e}\``).join(', ')}\n\n`;
                });
                filename = `${exampleType}_demo_export.md`;
                mimeType = 'text/markdown';
                break;
        }

        // Create and download file
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showToast(`Fișierul ${filename} a fost descărcat!`, 'success');
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-${this.getToastIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;

        container.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 5000);

        // Click to remove
        toast.addEventListener('click', () => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        });
    }

    getToastIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MetaCognitiveApp();
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

