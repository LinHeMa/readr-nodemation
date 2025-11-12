import "@xyflow/react/dist/style.css";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import { useNodesStore } from "@/stores/flow-editor/nodes-store";

const FlowEditor = () => {
  const { nodes, edges, onNodesChange, onEdgeChange } = useNodesStore();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgeChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowEditor;
