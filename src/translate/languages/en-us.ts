const englishTranslation = {
    en: {
        translations: {
            // Buttons
            button: {
                ok: 'Ok',
                add: 'Add',
                remove: 'Remove',
                cancel: 'Cancel',
                currentLanguage: {
                    name: 'ENGLISH',
                    ariaLabel: 'Change language',
                    tooltip: 'Change language'
                },
                toggleTheme: {
                    ariaLabel: 'Toggle light/dark theme',
                    tooltip: {
                        darkTheme: 'Dark theme',
                        lightTheme: 'Light theme'
                    }
                },
                resetAllStyles: {
                    ariaLabel: 'Remove all styles',
                    tooltip: 'Remove all styles'
                },
                readyStyles: {
                    ariaLabel: 'Sample styles',
                    tooltip: 'Sample styles'
                },
                propertyDetails: {
                    ariaLabel: 'Property details',
                    tooltip: 'Property details'
                },
                generateRandomText: {
                    name: 'Generate random text'
                },
                undoLastChange: {
                    ariaLabel: 'Undo last change',
                    tooltip: 'Undo last change'
                },
                returnDefaultValues: {
                    ariaLabel: 'Return to default value',
                    tooltip: 'Return to default value'
                },
                goBackPage: {
                    ariaLabel: 'Go back'
                }
            },

            // Button group
            buttonGroup: {
                valueType: {
                    buttonGroupContainer: {
                        ariaLabel: 'Select value type'
                    },
                    free: {
                        name: 'Free',
                        ariaLabel: 'Explicit Values'
                    },
                    predefined: {
                        name: 'Predefined',
                        ariaLabel: 'Predefined values'
                    }
                }
            },

            // Switch
            switch: {
                propertySelect: {
                    ariaLabel: '{{propertyName}} property switch'
                }
            },

            // Tabs
            tab: {
                appViewMenu: {
                    cssCode: {
                        label: 'CSS Code',
                        ariaLabel: 'CSS code result'
                    },
                    textEdit: {
                        label: 'Text edit',
                        ariaLabel: 'Edit viewer text'
                    }
                },
                propertyConfig: {
                    tabContainer: {
                        ariaLabel: 'Property configuration tabs'
                    },
                    propertyEdit: {
                        tooltip: 'Edit property',
                        ariaLabel: 'Edit property'
                    },
                    propertyHistory: {
                        tooltip: 'Change history',
                        ariaLabel: 'Change history'
                    }
                }
            },

            // Content
            content: {
                propertyMessageDisabled: 'Property disabled'
            },

            // Dialogs
            dialog: {
                resetAllStyles: {
                    title: 'Do you want to remove all styles?',
                    text: 'This action will undo all changes and disable all properties.'
                },
                returnDefaultValues: {
                    title: 'Do you want to return this property to its initial state?',
                    text: 'This action will undo the history and any changes made to this property.'
                }
            },

            // Property config item
            propertyConfigItem: {
                color: {
                    title: 'Color',
                    predefinedValueTitle: {
                        color: 'Colors',
                        global: 'Global'
                    }
                },
                fontFamily: {
                    title: 'Font'
                },
                fontSize: {
                    title: 'Size',
                    predefinedValueTitle: {
                        absolutes: 'Absolutes',
                        relative: 'Relative',
                        global: 'Global'
                    }
                },
                fontStretch: {
                    title: 'Stretching',
                    predefinedValueTitle: {
                        keywords: 'Keywords',
                        global: 'Global'
                    }
                },
                fontStyle: {
                    title: 'Style',
                    predefinedValueTitle: {
                        keywords: 'Keywords',
                        global: 'Global'
                    }
                },
                fontVariant: {
                    title: 'Variations',
                    predefinedValueTitle: {
                        keywords: 'Keywords',
                        global: 'Global'
                    }
                },
                fontWeight: {
                    title: 'Weight',
                    predefinedValueTitle: {
                        keywords: 'Keywords',
                        relative: 'Relative',
                        global: 'Global'
                    }
                },
                letterSpacing: {
                    title: 'Spacing',
                    predefinedValueTitle: {
                        keywords: 'Keywords',
                        global: 'Global'
                    }
                },
                textShadow: {
                    selectShadow: {
                        title: 'Select shadow'
                    },
                    color: {
                        title: 'Color',
                        predefinedValueTitle: {
                            color: 'Colors',
                            global: 'Global'
                        }
                    },
                    positionY: {
                        title: 'Position Y'
                    },
                    positionX: {
                        title: 'Position X'
                    },
                    blur: {
                        title: 'Blur'
                    }
                },
                wordSpacing: {
                    title: 'Spacing',
                    predefinedValueTitle: {
                        keywords: 'Keywords',
                        global: 'Global'
                    }
                }
            },

            // Redux
            redux: {
                property: {
                    color: {
                        description: 'Change character color'
                    },
                    fontFamily: {
                        description: 'Define priority list that different fonts will apply'
                    },
                    fontSize: {
                        description: 'Change character size'
                    },
                    fontStretch: {
                        description: 'Changes character lengthening'
                    },
                    fontStyle: {
                        description: 'Change font slant style (italic, oblique, etc...)'
                    },
                    fontVariant: {
                        description: 'This is an abbreviated property that makes it possible to apply different variations to the font'
                    },
                    fontWeight: {
                        description: 'Change character thickness'
                    },
                    letterSpacing: {
                        description: 'Change spacing between characters'
                    },
                    textShadow: {
                        description: 'Apply shadow to characters'
                    },
                    wordSpacing: {
                        description: 'Change spacing between words'
                    }
                }
            }
        }
    }
};

export { englishTranslation };
