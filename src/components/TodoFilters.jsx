export default function TodoFilters({ filter, setFilter }) {
    return (
      <div>
        <button onClick={() => setFilter('todas')}>Todas</button>
        <button onClick={() => setFilter('concluidas')}>Concluídas</button>
        <button onClick={() => setFilter('pendentes')}>Pendentes</button>
      </div>
    );
  }