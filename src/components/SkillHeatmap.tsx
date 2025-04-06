import React from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';

interface SkillNode {
  name: string;
  size: number;
  proficiency: number;
  color: string;
}

interface SkillHeatmapProps {
  data: {
    name: string;
    children: SkillNode[];
  };
}

const COLORS = [
  '#4F46E5', // indigo-600
  '#6366F1', // indigo-500
  '#818CF8', // indigo-400
  '#A5B4FC', // indigo-300
];

export function SkillHeatmap({ data }: SkillHeatmapProps) {
  const CustomContent = (props: any) => {
    const { root, depth, x, y, width, height, name, proficiency } = props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: COLORS[depth % 4],
            stroke: '#fff',
            strokeWidth: 2,
            strokeOpacity: 1 / (depth + 1),
          }}
        />
        {depth === 1 && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2}
              textAnchor="middle"
              fill="#fff"
              fontSize={14}
              fontWeight="bold"
            >
              {name}
            </text>
            <text
              x={x + width / 2}
              y={y + height / 2 + 20}
              textAnchor="middle"
              fill="#fff"
              fontSize={12}
            >
              {proficiency}%
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <div className="w-full h-96 bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Proficiency Heatmap</h3>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={[data]}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          content={CustomContent}
        >
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-2 shadow-lg rounded border">
                    <p className="font-semibold">{data.name}</p>
                    <p className="text-sm">Proficiency: {data.proficiency}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}