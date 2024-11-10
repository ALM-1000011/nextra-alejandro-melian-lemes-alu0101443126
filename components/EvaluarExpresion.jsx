// components/EvaluarExpresion.jsx
import { evaluate } from 'mathjs';
import { useState } from 'react';

export default function EvaluarExpresion() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleEvaluate = () => {
        try {
            setResult(evaluate(input));
        } catch {
            setResult('Error en la expresión');
        }
    };

    return (
        <div>
            <h2>Cálculo de Ingredientes</h2>
            <input
                type="text"
                placeholder="Introduce una expresión (ej. 3 * 200 gramos)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleEvaluate}>Calcular</button>
            <p>Resultado: {result}</p>
        </div>
    );
}
