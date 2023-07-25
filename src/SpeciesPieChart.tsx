import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DataSanitise from "./DataSanitise";
import SpeciesType from "./types/SpeciesType";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PropsType {
    speciesData: SpeciesType[];
}

const SpeciesPieChart = (props: PropsType) => {
    const {speciesData} = props;
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [languageOptions, setLanguageOptions] = useState<string[]>([]);
    const [classificationOptions, setClassificationOptions] = useState<string[]>([]);

    useEffect(() => {
        // Extract unique language options from the speciesData array
        const allLanguages = speciesData.map((species) => species.language);
        const uniqueLanguages = Array.from(new Set(allLanguages));
        setLanguageOptions(uniqueLanguages);

        // Extract unique classification options from the speciesData array
        const allClassifications = speciesData.map((species) => species.classification);
        const uniqueClassifications = Array.from(new Set(allClassifications));
        setClassificationOptions(uniqueClassifications);
    }, []);

    // Filter species based on the selected language
    const speciesWithSelectedLanguage = speciesData.filter(
        (species: { language: string; }) => species.language.includes(selectedLanguage)
    );

    // Calculate the counts of species with the selected language
    const speciesCount = speciesWithSelectedLanguage.length;

    // Generate data for the pie chart
    const pieChartData = {
        labels: ['With Selected Language', 'Without Selected Language'],
        datasets: [
            {
                data: [speciesCount, speciesData.length - speciesCount],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        animation: {
            animateRotate: true,
        },
    };

    // Handle language selection change
    const handleLanguageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="language-select">Select a Language:</label>
                <select
                    id="language-select"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                >
                    {languageOptions.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            </div>

            <Pie data={pieChartData} options={options} />
        </div>
    );
};

export default SpeciesPieChart;
