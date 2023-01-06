import React from 'react'

export default function ListsDay() {
  return (
    <div>
        <h1>Day 1</h1>
        <div>
            <h1>Hotels</h1>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Nom de l'hôtel</th>
                            <th>Saison</th>
                            <th>Catégorie</th>
                            <th>Type de logement</th>
                            <th>Tarifs</th>
                        </tr>
                        </thead>
                        <tbody>
                                <tr >
                                <td>Radisson</td>
                                <td>
                                    Haute saison
                                </td>
                                <td>
                                    Simple
                                </td>
                                <td>
                                    Villa
                                </td>
                                <td>90$</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            <h2> Listes des préstations</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Nom de préstation</th>
                            <th>Tarifs de préstation</th>
                        </tr>
                        </thead>
                        <tbody>
                                <tr >
                                    <td>Piscine</td>
                                    <td>90$</td>
                                </tr>
                                <tr >
                                    <td>Visites</td>
                                    <td>90$</td>
                                </tr>
                                <tr >
                                    <td>Kanoe</td>
                                    <td>90$</td>
                                </tr>
                        </tbody>
                    </table>
        </div>
    </div>
  )
}
