const portugueseTranslation = {
    pt: {
        translations: {
            // Buttons
            button: {
                ok: 'Ok',
                add: 'Adicionar',
                remove: 'Remover',
                cancel: 'Cancelar',
                currentLanguage: {
                    name: 'PORTUGUÊS',
                    ariaLabel: 'Alterar idioma',
                    tooltip: 'Alterar idioma'
                },
                toggleTheme: {
                    ariaLabel: 'Alternar tema claro/escuro',
                    tooltip: {
                        darkTheme: 'Tema escuro',
                        lightTheme: 'Tema claro'
                    }
                },
                resetAllStyles: {
                    ariaLabel: 'Remover todos os estilos',
                    tooltip: 'Remover todos os estilos'
                },
                readyStyles: {
                    ariaLabel: 'Estilos prontos',
                    tooltip: 'Estilos prontos'
                },
                propertyDetails: {
                    ariaLabel: 'Informações sobre as propriedades',
                    tooltip: 'Informações sobre as propriedades'
                },
                generateRandomText: {
                    name: 'Gerar texto aleatório'
                },
                undoLastChange: {
                    ariaLabel: 'Desfazer a ultima alteração',
                    tooltip: 'Desfazer a ultima alteração'
                },
                returnDefaultValues: {
                    ariaLabel: 'Voltar ao valor padrão',
                    tooltip: 'Voltar ao valor padrão'
                },
                goBackPage: {
                    ariaLabel: 'Voltar'
                }
            },

            // Button group
            buttonGroup: {
                valueType: {
                    buttonGroupContainer: {
                        ariaLabel: 'Selecionar o tipo de valor'
                    },
                    free: {
                        name: 'Livre',
                        ariaLabel: 'Valores explícitos'
                    },
                    predefined: {
                        name: 'Pré-definido',
                        ariaLabel: 'Valores pré-definidos'
                    }
                }
            },

            // Switch
            switch: {
                propertySelect: {
                    ariaLabel: 'Interruptor da propriedade {{propertyName}}'
                }
            },

            // Tabs
            tab: {
                appViewMenu: {
                    cssCode: {
                        label: 'Código CSS',
                        ariaLabel: 'Resultado do código CSS'
                    },
                    textEdit: {
                        label: 'Editar texto',
                        ariaLabel: 'Editar texto do visualizador'
                    }
                },
                propertyConfig: {
                    tabContainer: {
                        ariaLabel: 'Abas de configuração de propriedades'
                    },
                    propertyEdit: {
                        tooltip: 'Editar propriedade',
                        ariaLabel: 'Editar propriedade'
                    },
                    propertyHistory: {
                        tooltip: 'Histórico de alterações',
                        ariaLabel: 'Histórico de alterações'
                    }
                }
            },

            // Content
            content: {
                propertyMessageDisabled: 'Propriedade desativada'
            },

            // Dialogs
            dialog: {
                resetAllStyles: {
                    title: 'Deseja remover todos os estilos?',
                    text: 'Esta ação irá desfazer todas as alterações e desativará todas as propriedades.'
                },
                returnDefaultValues: {
                    title: 'Deseja voltar esta propriedade ao estado inicial?',
                    text: 'Esta ação irá desfazer o histórico e qualquer alteração feita nesta propriedade.'
                }
            },

            // PropertyConfigItem
            propertyConfigItem: {
                color: {
                    title: 'Cor',
                    predefinedValueTitle: {
                        color: 'Cores',
                        global: 'Globais'
                    }
                },
                fontFamily: {
                    title: 'Fonte'
                },
                fontSize: {
                    title: 'Tamanho',
                    predefinedValueTitle: {
                        absolutes: 'Absolutos',
                        relative: 'Relativos',
                        global: 'Globais'
                    }
                },
                fontStretch: {
                    title: 'Alongamento',
                    predefinedValueTitle: {
                        keywords: 'Palavras-chave',
                        global: 'Globais'
                    }
                },
                fontStyle: {
                    title: 'Estilo',
                    predefinedValueTitle: {
                        keywords: 'Palavras-chave',
                        global: 'Globais'
                    }
                },
                fontVariant: {
                    title: 'Variações',
                    predefinedValueTitle: {
                        keywords: 'Palavras-chave',
                        global: 'Globais'
                    }
                },
                fontWeight: {
                    title: 'Peso',
                    predefinedValueTitle: {
                        keywords: 'Palavras-chave',
                        relative: 'Relativos',
                        global: 'Globais'
                    }
                },
                letterSpacing: {
                    title: 'Espaçamento',
                    predefinedValueTitle: {
                        keywords: 'Palavras-chave',
                        global: 'Globais'
                    }
                },
                textShadow: {
                    selectShadow: {
                        title: 'Selecionar sombra'
                    },
                    color: {
                        title: 'Cor',
                        predefinedValueTitle: {
                            color: 'Cores',
                            global: 'Globais'
                        }
                    },
                    positionY: {
                        title: 'Posicionamento Y'
                    },
                    positionX: {
                        title: 'Posicionamento X'
                    },
                    blur: {
                        title: 'Desfoque'
                    }
                },
                wordSpacing: {
                    title: 'Espaçamento',
                    predefinedValueTitle: {
                        keywords: 'Palavras-chave',
                        global: 'Globais'
                    }
                }
            },

            // Redux
            redux: {
                property: {
                    color: {
                        description: 'Altera a cor dos caracteres'
                    },
                    fontFamily: {
                        description: 'Define uma lista de prioridades em que diferentes fontes serão aplicadas'
                    },
                    fontSize: {
                        description: 'Altera o tamanho  dos caracteres'
                    },
                    fontStretch: {
                        description: 'Altera o alongamento dos caracteres'
                    },
                    fontStyle: {
                        description: 'Altera o estilo de inclinação da fonte (itálico, oblíquo, etc...)'
                    },
                    fontVariant: {
                        description: 'Esta é uma propriedade abreviada que possibilita aplicar diferentes variações na fonte'
                    },
                    fontWeight: {
                        description: 'Altera a espessura dos caracteres'
                    },
                    letterSpacing: {
                        description: 'Altera o espaçamento entre os caracteres'
                    },
                    textShadow: {
                        description: 'Aplica sombra nos caracteres'
                    },
                    wordSpacing: {
                        description: 'Altera o espaçamento entre as palavras'
                    }
                }
            }
        }
    }
};

export { portugueseTranslation };
