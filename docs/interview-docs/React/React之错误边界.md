# React之错误边界（Error Boundaries）

过去，组件内的代码异常会导致 React 的内部状态被破坏，产生可能无法追踪的错误。但 React 并没有提供一种优雅处理这些错误的方式，也无法从错误中恢复。
默认情况下，若一个组件在渲染期间（render）发生错误，会导致整个组件树全部被卸载，这当然不是我们期望的结果。
部分组件的错误不应该导致整个应用崩溃。为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界
错误边界是一种 React 组件，这种组件可以捕获发生在其子组件树任何位置的异常，并打印这些错误，同时展示降级 UI，而并不会渲染那些发生崩溃的子组件树。

 ### `注意:`

- 错误边界目前只在 Class Component 中实现了，没有在 hooks 中实现（因为Error Boundaries的实现借助了this.setState可以传递callback的特性，useState无法传入回调，所以无法完全对标）;

错误边界 无法捕获 以下四种场景中产生的错误：
- 事件处理函数（因为 Error Boundaries 实现的本质是触发更新，但是事件处理函数不在render或者commit阶段，所以无法进行捕获，如果你需要在事件处理器内部捕获错误，可以使用原生的 try / catch 语句 了解更多）
- 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
- 服务端渲染（因为触发更新只能在客户端进行，不能在serve端进行）
- 它自身抛出来的错误（因为错误抛出要向父节点冒泡寻找 Error Boundaries 处理，无法处理自身产生的错误）

### 实现
React中提供了两个与错误处理相关的api：

- getderivedstatefromerror：静态方法，当错误发生后，提供一个机会渲染 Fallback UI
- componentDidCatch：组件实例方法，当错误发生后，提供一个机会记录错误信息

如果一个 class 组件中定义了 getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>wrong message</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

```

然后你可以将它作为一个常规组件去使用：

```
<ErrorBoundary>
  <A />
  <B />
  <C />
</ErrorBoundary>
```

错误边界的工作方式类似于原生的 catch {}，不同的地方在于，错误边界只针对 React 组件。并且只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。
错误边界应该放置在哪？
错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件中，并为用户展示一个 “xxx” 的错误信息，就像服务端框架经常处理崩溃一样。也可以将单独的组件包装在错误边界，从而保护其它组件不会崩溃。（例如，Facebook Messenger 将侧边栏、信息面板、聊天记录以及信息输入框包装在单独的错误边界中。如果其中的某些 UI 组件崩溃，其余部分仍然能够交互。）
未捕获错误（Uncaught Errors）该如何处理？
自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。
在某些场景下，把一个错误的 UI 留在那，比完全移除它要更糟糕。比如在类似 Messenger 的产品中，把一个异常的 UI 展示给用户，可能会导致用户把错误信息发给别人。同样，对于支付类场景而言，与其显示错误的支付金额，不如直接让页面白屏。
（所以，错误边界的使用难点在于寻找合适的时机，知道在什么时候该用，什么时候不该用，这是一个充满哲学的问题）
注意：自 React 15 的命名更改
React 15 中有一个支持有限的错误边界方法 unstable_handleError。这个方法不再起作用，自 React 16 起你需要在代码中将其修改为 componentDidCatch。
