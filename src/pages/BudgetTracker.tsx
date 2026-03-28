import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Navbar } from '../components/Navbar';

const BUDGET_CATEGORIES = ['Venue', 'Catering', 'Decoration', 'Photography', 'Entertainment', 'Transport', 'Clothing', 'Other'];

export const BudgetTracker: React.FC = () => {
  const { t } = useLanguage();
  const [totalBudget] = useState(5000000);
  const [expenses, setExpenses] = useState<{ category: string; amount: number }[]>([]);
  const [newExpense, setNewExpense] = useState({ category: 'Venue', amount: 0 });

  const addExpense = () => {
    if (newExpense.amount > 0) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ category: 'Venue', amount: 0 });
    }
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = totalBudget - totalSpent;
  const categoryTotals = BUDGET_CATEGORIES.map(cat => ({
    category: cat,
    amount: expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
  }));

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: '#1a1a1a', marginBottom: '2rem' }}>💰 {String(t('budget.budgetTracker'))}</h1>

          {/* Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #D4AF37'
            }}>
              <p style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Total Budget</p>
              <h3 style={{ color: '#1a1a1a', margin: 0, fontSize: '1.8rem' }}>
                {totalBudget.toLocaleString()} TSh
              </h3>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #FF6B6B'
            }}>
              <p style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Spent</p>
              <h3 style={{ color: '#FF6B6B', margin: 0, fontSize: '1.8rem' }}>
                {totalSpent.toLocaleString()} TSh
              </h3>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #4CAF50'
            }}>
              <p style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Remaining</p>
              <h3 style={{ color: '#4CAF50', margin: 0, fontSize: '1.8rem' }}>
                {remaining.toLocaleString()} TSh
              </h3>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #2196F3'
            }}>
              <p style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Spent %</p>
              <h3 style={{ color: '#2196F3', margin: 0, fontSize: '1.8rem' }}>
                {((totalSpent / totalBudget) * 100).toFixed(1)}%
              </h3>
            </div>
          </div>

          {/* Add Expense */}
          <div style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>Add Expense</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <select
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.375rem',
                  fontSize: '1rem'
                }}
              >
                {BUDGET_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="number"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: Number(e.target.value) })}
                placeholder="Amount (TSh)"
                style={{
                  flex: 1,
                  minWidth: '150px',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.375rem',
                  fontSize: '1rem'
                }}
              />
              <button
                onClick={addExpense}
                style={{
                  background: '#D4AF37',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Add
              </button>
            </div>
          </div>

          {/* Category Breakdown */}
          <div style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>Budget by Category</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {categoryTotals.map(cat => (
                <div key={cat.category} style={{
                  padding: '1rem',
                  background: '#f9f9f9',
                  borderRadius: '0.5rem',
                  borderLeft: '3px solid #D4AF37'
                }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600, color: '#333' }}>{cat.category}</p>
                  <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#D4AF37' }}>
                    {cat.amount.toLocaleString()} TSh
                  </p>
                  <div style={{
                    background: '#eee',
                    height: '6px',
                    borderRadius: '3px',
                    marginTop: '0.5rem',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      background: '#D4AF37',
                      height: '100%',
                      width: `${Math.min((cat.amount / totalBudget) * 100, 100)}%`
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};