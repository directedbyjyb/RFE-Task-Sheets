// Function to get URLs for the task docs based on location, day, and shift
function getTaskDocsURLs(location, day, shift) {
    const taskDocs = {
        RAC: {
            monday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-monday-opening-1',
                    'https://docs.google.com/document/d/RAC-monday-opening-2',
                    'https://docs.google.com/document/d/RAC-monday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-monday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-monday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-monday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-monday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-monday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-monday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-monday-closing-1',
                    'https://docs.google.com/document/d/RAC-monday-closing-2',
                    'https://docs.google.com/document/d/RAC-monday-closing-3'
                ]
            },
            tuesday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-tuesday-opening-1',
                    'https://docs.google.com/document/d/RAC-tuesday-opening-2',
                    'https://docs.google.com/document/d/RAC-tuesday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-tuesday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-tuesday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-tuesday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-tuesday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-tuesday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-tuesday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-tuesday-closing-1',
                    'https://docs.google.com/document/d/RAC-tuesday-closing-2',
                    'https://docs.google.com/document/d/RAC-tuesday-closing-3'
                ]
            },
            wednesday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-wednesday-opening-1',
                    'https://docs.google.com/document/d/RAC-wednesday-opening-2',
                    'https://docs.google.com/document/d/RAC-wednesday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-wednesday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-wednesday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-wednesday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-wednesday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-wednesday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-wednesday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-wednesday-closing-1',
                    'https://docs.google.com/document/d/RAC-wednesday-closing-2',
                    'https://docs.google.com/document/d/RAC-wednesday-closing-3'
                ]
            },
            thursday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-thursday-opening-1',
                    'https://docs.google.com/document/d/RAC-thursday-opening-2',
                    'https://docs.google.com/document/d/RAC-thursday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-thursday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-thursday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-thursday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-thursday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-thursday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-thursday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-thursday-closing-1',
                    'https://docs.google.com/document/d/RAC-thursday-closing-2',
                    'https://docs.google.com/document/d/RAC-thursday-closing-3'
                ]
            },
            friday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-friday-opening-1',
                    'https://docs.google.com/document/d/RAC-friday-opening-2',
                    'https://docs.google.com/document/d/RAC-friday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-friday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-friday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-friday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-friday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-friday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-friday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-friday-closing-1',
                    'https://docs.google.com/document/d/RAC-friday-closing-2',
                    'https://docs.google.com/document/d/RAC-friday-closing-3'
                ]
            },
            saturday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-saturday-opening-1',
                    'https://docs.google.com/document/d/RAC-saturday-opening-2',
                    'https://docs.google.com/document/d/RAC-saturday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-saturday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-saturday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-saturday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-saturday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-saturday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-saturday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-saturday-closing-1',
                    'https://docs.google.com/document/d/RAC-saturday-closing-2',
                    'https://docs.google.com/document/d/RAC-saturday-closing-3'
                ]
            },
            sunday: {
                Opening: [
                    'https://docs.google.com/document/d/RAC-sunday-opening-1',
                    'https://docs.google.com/document/d/RAC-sunday-opening-2',
                    'https://docs.google.com/document/d/RAC-sunday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/RAC-sunday-mid-morning-1',
                    'https://docs.google.com/document/d/RAC-sunday-mid-morning-2',
                    'https://docs.google.com/document/d/RAC-sunday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/RAC-sunday-afternoon-1',
                    'https://docs.google.com/document/d/RAC-sunday-afternoon-2',
                    'https://docs.google.com/document/d/RAC-sunday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/RAC-sunday-closing-1',
                    'https://docs.google.com/document/d/RAC-sunday-closing-2',
                    'https://docs.google.com/document/d/RAC-sunday-closing-3'
                ]
            }
        },
        MAC: {
            monday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-monday-opening-1',
                    'https://docs.google.com/document/d/MAC-monday-opening-2',
                    'https://docs.google.com/document/d/MAC-monday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-monday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-monday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-monday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-monday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-monday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-monday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-monday-closing-1',
                    'https://docs.google.com/document/d/MAC-monday-closing-2',
                    'https://docs.google.com/document/d/MAC-monday-closing-3'
                ]
            },
            tuesday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-tuesday-opening-1',
                    'https://docs.google.com/document/d/MAC-tuesday-opening-2',
                    'https://docs.google.com/document/d/MAC-tuesday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-tuesday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-tuesday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-tuesday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-tuesday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-tuesday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-tuesday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-tuesday-closing-1',
                    'https://docs.google.com/document/d/MAC-tuesday-closing-2',
                    'https://docs.google.com/document/d/MAC-tuesday-closing-3'
                ]
            },
            wednesday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-wednesday-opening-1',
                    'https://docs.google.com/document/d/MAC-wednesday-opening-2',
                    'https://docs.google.com/document/d/MAC-wednesday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-wednesday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-wednesday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-wednesday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-wednesday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-wednesday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-wednesday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-wednesday-closing-1',
                    'https://docs.google.com/document/d/MAC-wednesday-closing-2',
                    'https://docs.google.com/document/d/MAC-wednesday-closing-3'
                ]
            },
            thursday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-thursday-opening-1',
                    'https://docs.google.com/document/d/MAC-thursday-opening-2',
                    'https://docs.google.com/document/d/MAC-thursday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-thursday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-thursday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-thursday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-thursday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-thursday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-thursday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-thursday-closing-1',
                    'https://docs.google.com/document/d/MAC-thursday-closing-2',
                    'https://docs.google.com/document/d/MAC-thursday-closing-3'
                ]
            },
            friday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-friday-opening-1',
                    'https://docs.google.com/document/d/MAC-friday-opening-2',
                    'https://docs.google.com/document/d/MAC-friday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-friday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-friday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-friday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-friday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-friday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-friday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-friday-closing-1',
                    'https://docs.google.com/document/d/MAC-friday-closing-2',
                    'https://docs.google.com/document/d/MAC-friday-closing-3'
                ]
            },
            saturday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-saturday-opening-1',
                    'https://docs.google.com/document/d/MAC-saturday-opening-2',
                    'https://docs.google.com/document/d/MAC-saturday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-saturday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-saturday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-saturday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-saturday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-saturday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-saturday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-saturday-closing-1',
                    'https://docs.google.com/document/d/MAC-saturday-closing-2',
                    'https://docs.google.com/document/d/MAC-saturday-closing-3'
                ]
            },
            sunday: {
                Opening: [
                    'https://docs.google.com/document/d/MAC-sunday-opening-1',
                    'https://docs.google.com/document/d/MAC-sunday-opening-2',
                    'https://docs.google.com/document/d/MAC-sunday-opening-3'
                ],
                'Mid-Morning': [
                    'https://docs.google.com/document/d/MAC-sunday-mid-morning-1',
                    'https://docs.google.com/document/d/MAC-sunday-mid-morning-2',
                    'https://docs.google.com/document/d/MAC-sunday-mid-morning-3'
                ],
                Afternoon: [
                    'https://docs.google.com/document/d/MAC-sunday-afternoon-1',
                    'https://docs.google.com/document/d/MAC-sunday-afternoon-2',
                    'https://docs.google.com/document/d/MAC-sunday-afternoon-3'
                ],
                Closing: [
                    'https://docs.google.com/document/d/MAC-sunday-closing-1',
                    'https://docs.google.com/document/d/MAC-sunday-closing-2',
                    'https://docs.google.com/document/d/MAC-sunday-closing-3'
                ]
            }
        }
    };

    return taskDocs[location]?.[day]?.[shift] || []; // Return array of URLs or empty array if not found
}
